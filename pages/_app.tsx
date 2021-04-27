import { useEffect, useState } from "react";
import { Amplify, Hub, graphqlOperation } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignUp } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsExports from "../src/aws-exports";
import { AppProps } from "next/app";
import { createLinkList } from '../src/graphql/mutations'

Amplify.configure({ ...awsExports, ssr: true });

const Public = ({ children }) => children

function authListener() {
  Hub.listen('auth', async (data) => {
    if (data.payload.event == 'signUp') {
      await Amplify.API.graphql(
        graphqlOperation(createLinkList, {
          input: {
            id: data.payload.data.user.username,
            title: data.payload.data.user.username,
            createdAt: `${Date.now()}`,
          },
        })
      )
    }
  })
}

function MyApp({ Component, pageProps }: AppProps) {


  const [authState, setAuthState] = useState()
  const [user, setUser] = useState()

  useEffect(() => {
    authListener()
  }, [])

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState: any, authData: any) => {
      setAuthState(nextAuthState);
      setUser(authData)
    });
  }, []);

  return pageProps.public ? (
    <Public>
      <Component {...pageProps} />
    </Public>
  ) : authState === AuthState.SignedIn && user ? (
    <div className="App">
      <Component {...pageProps} />
      <AmplifySignOut />
    </div>
  ) : (
    <AmplifyAuthenticator>
      <AmplifySignUp slot="sign-up" headerText={"custom header"}/>
    </AmplifyAuthenticator>
  )
}

export default MyApp
