import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

import App from './components/App';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import PhilosopherIndex from './components/PhilosopherIndex';
import requireAuth from './components/requireAuth';
import PhilosopherCreate from './components/PhilosopherCreate';
import PhilosopherDetail from './components/PhilosopherDetail';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="login" component={LoginForm} />
          <Route path="signup" component={SignupForm} />
          //<Route path="philosopherIndex" component={requireAuth(PhilosopherIndex)} />
          <Route path="philosopherIndex" component={requireAuth(PhilosopherIndex)} />
          <Route path="philosophers/new" component={PhilosopherCreate} />
          <Route path="philosophers/:id" component={PhilosopherDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
