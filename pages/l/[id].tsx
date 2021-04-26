import Head from 'next/head'
import { Amplify, withSSRContext } from "aws-amplify"
import {GetStaticPaths, GetStaticProps} from "next"
import {useRouter} from "next/dist/client/router"
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api'

import awsExports from '../../src/aws-exports'
import {getLinkList, listLinks} from '../../src/graphql/queries'
import {GetLinkListQuery, Link, ListLinksQuery} from '../../src/API'

Amplify.configure({ ...awsExports, ssr: true })

const LinksPage = ({ linkList }: { linkList: any }) => {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div>
        <h1>Loading&hellip;</h1>
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>{linkList.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul>
        {linkList.links.items.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const SSR = withSSRContext()

  const linkListQuery = (await SSR.API.graphql({ query: listLinks,
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  })) as { data: ListLinksQuery; errors: any[] }

  const paths = linkListQuery.data.listLinks.items.map((link: Link) => ({
    params: { id: link.id },
  }))

  return {
    fallback: true,
    paths,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const SSR = withSSRContext()

  const response = (await SSR.API.graphql({
    query: getLinkList,
    variables: {
      id: params.id,
    },
  })) as { data: GetLinkListQuery }

  return {
    props: {
      public: true,
      linkList: response.data.getLinkList,
    },
  }
}

export default LinksPage
