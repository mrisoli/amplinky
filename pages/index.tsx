import { Reducer, useReducer, Dispatch } from 'react'
import { Amplify, Auth, graphqlOperation, withSSRContext } from 'aws-amplify'
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import nanoid from 'nanoid'
import produce from 'immer'

import { ListLinksQuery, GetLinkListQuery, ListLinkListsQuery } from '../src/API'
import config from '../src/aws-exports'
import { createLink, deleteLink } from '../src/graphql/mutations'
import { getLinkList } from '../src/graphql/queries'
import {NextPageContext} from 'next'

Amplify.configure({...config, ssr: true })

type Link = Omit<
  ListLinksQuery['listLinks']['items'][0],
  '__typename' | 'linkList'
>

type LinkList = Omit<
  ListLinkListsQuery['listLinkLists']['items'][0],
  '__typename' | 'linkList'
>

type LinkData = {
  linkLinkListId: string
  title: string
  url: string
}

type Props = {
  linkList: LinkList
  links: Link[]
}

type LinkState = {
  links: Link[]
  currentTitle: string
  currentUrl: string
}

type LinkAction =
  | {
  type: 'add-link'
  payload: Link
}
| {
  type: 'delete-link'
  payload: string
}
| {
  type: 'reset-current-link'
}
| { type: 'set-current-link-title'; payload: string }
| { type: 'set-current-link-url'; payload: string }

const linksReducer: Reducer<LinkState, LinkAction> = (state, action) => {
  switch (action.type) {
    case 'add-link': {
      return produce(state, (draft) => {
        draft.links.push(action.payload)
      })
    }
    case 'delete-link': {
      const index = state.links.findIndex(({ id }) => action.payload === id)
      if (index === -1) return state
        return produce(state, (draft) => {
          draft.links.splice(index, 1)
        })
    }
    case 'reset-current-link': {
      return produce(state, (draft) => {
        draft.currentTitle = ''
        draft.currentUrl = ''
      })
    }
    case 'set-current-link-title': {
      return produce(state, (draft) => {
        draft.currentTitle = action.payload
      })
    }
    case 'set-current-link-url': {
      return produce(state, (draft) => {
        draft.currentUrl = action.payload
      })
    }
    default: {
      return state
    }
  }
}

const createNewLink = async (dispatch: Dispatch<LinkAction>, currentLink: LinkData) => {
  const user = await Auth.currentAuthenticatedUser()
  const link = {
    id: nanoid(),
    ...currentLink,
    createdAt: `${Date.now()}`,
    userId: user.username,
  }
  dispatch({ type: 'add-link', payload: link })
  dispatch({ type: 'reset-current-link' })
  try {
    await Amplify.API.graphql(graphqlOperation(createLink, { input: link }))
  } catch (err) {
    dispatch({ type: 'set-current-link-title', payload: link.title })
    dispatch({ type: 'set-current-link-url', payload: link.url })
    console.warn('Error adding to do ', err)
  }
}

const deleteLinkById = async (dispatch: Dispatch<LinkAction>, id: string) => {
  dispatch({ type: 'delete-link', payload: id })
  try {
    await Amplify.API.graphql({
      ...graphqlOperation(deleteLink),
      variables: { input: { id } },
    })
  } catch (err) {
    console.warn('Error deleting to do ', err)
  }
}

const App = (props: Props) => {
  const [linksState, dispatchLinks] = useReducer(linksReducer, {
    links: props.links,
    currentTitle: '',
    currentUrl: '',
  })

  return (
    <div>
      <h3>Add a Link</h3>

      <form
        onSubmit={(ev) => {
          ev.preventDefault()
          createNewLink(dispatchLinks, { title: linksState.currentTitle, url: linksState.currentUrl, linkLinkListId: props.linkList.id })
        }}
      >
        <input
          value={linksState.currentTitle}
          onChange={(e) => {
            dispatchLinks({ type: 'set-current-link-title', payload: e.target.value })
          }}
        />

        <input
          value={linksState.currentUrl}
          onChange={(e) => {
            dispatchLinks({ type: 'set-current-link-url', payload: e.target.value })
          }}
        />
        <button type="submit">Create Link</button>
      </form>

      <h3>Links List</h3>
      {linksState.links.map((link, index) => (
        <p key={index}>
          <a href={link.url}>{link.title}</a>
          <button
            onClick={() => {
              deleteLinkById(dispatchLinks, link.id)
            }}
          >
            delete
          </button>
        </p>
      ))}
    </div>
  )
}

export const getServerSideProps = async (context: NextPageContext) => {
  const { req } = context
  const SSR = withSSRContext({ req })
  try {
    const { Auth } = SSR
    const user = await Auth.currentAuthenticatedUser();

    let result = (await SSR.API.graphql({
      query: getLinkList,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
      variables: {
        id: user.username
      }
    })) as { data: GetLinkListQuery; errors: any[] }

    if (result.errors) {
      console.error('Failed to fetch linklist.', result.errors)
      throw new Error(result.errors[0].message)
    }
    if (result.data.getLinkList !== null) {
      return {
        props: {
          linkList: result.data.getLinkList,
          links: result.data.getLinkList.links.items,
        },
      }
    }

    return {
      props: {
        links: [],
      },
    }
  } catch (err) {
    console.log(err)
    return {
      props: {
        authenticated: false
      }
    }
  }
}

export default App
