import React, {  useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
// from apollo boost
// import ApolloClient, { InMemoryCache, HttpLink } from 'apollo-boost';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
// gql
import { split } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

import { ApolloProvider } from '@apollo/react-hooks';
import { Flip, ToastContainer } from 'react-toastify';

import PrivateRoute from './components/admin/PrivateRoute'
import PublicRoute from './components/admin/PublicRoute'
import AdminDashboard from './pages/AdminDashboard'
import Home from './pages/Home'
import CV from './pages/CV'
import CVtoShare from './pages/CVtoShare'
import Legal from './pages/Legal'
import Site from './pages/site/Site'
import SiteUpdate from './pages/site/SiteUpdate'
import Register from './pages/auth/Register'
import PasswordSetting from './pages/auth/PasswordSetting'
import Login from './pages/auth/Login'

import { AuthContext } from './context/authContext'

const App = () => {
  const { state } = useContext(AuthContext)
  console.log(state)
  const { user } = state

  const wsLink = new WebSocketLink({
    uri: process.env.REACT_APP_GRAPHQL_WS_ENDPOINT,
    options: {
      reconnect: true
    }
  });

  // 2. create http link
  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT
  });

  // 3. setContext for authtoken
  const authLink = setContext(() => {
    return {
      headers: {
        authtoken: user ? user.token : ''
      }
    };
  });

  // 4. concat http and authtoken link
  const httpAuthLink = authLink.concat(httpLink);

  // 5. use split to split http link or websocket link
  const link = split(
    ({ query }) => {
      // split link based on operation type
      const definition = getMainDefinition(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    httpAuthLink
  );

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
  });

  // const client = new ApolloClient({
  //     uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  //     request: (operation) => {
  //         operation.setContext({
  //             headers: {
  //                 authtoken: user ? user.token : ''
  //             }
  //         });
  //     }
  // });

  return (
    <ApolloProvider client={client}>
      <ToastContainer
        transition={Flip}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/CV" component={CV} />
        <Route exact path="/CVtoShare" component={CVtoShare} />
        <Route exact path="/mentions-legales" component={Legal} />
        <PrivateRoute exact path="/admin-dashboard" component={AdminDashboard} />
        <PrivateRoute exact path="/newsite" component={Site} />
       {/*  <PublicRoute exact path="/register" component={Register} /> */}
        <Route exact path="/password-setting" component={PasswordSetting} />
        <PublicRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/site/update/:siteid" component={SiteUpdate} />


      </Switch>
    </ApolloProvider>
  );
}

export default App;
