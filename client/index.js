import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'; //by default apollo client import
import { ApolloProvider } from 'react-apollo'; //wh we putting apolloprovider in curly bracesvbecause react-apollo
// has so many providers thats why we mention it i want one provider thats th reason for putting curly braces
import './index.css';
// import { Router,hashHistory,Route,IndexRoute } from 'react-router';
import App from './components/App';
import { HttpLink } from 'apollo-link-http';
import {BrowserRouter,Route} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import requireAuth from './components/requireAuth';

const link = new HttpLink({
  uri:'/graphql',
  // Additional fetch options like `credentials` or `headers`
  credentials: 'same-origin',
});

const client = new ApolloClient({
    link,
    dataIdFromObject: o => o.id
});

const Root = () => {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App>
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignupForm} />
            <Route path="/dashboard" component={requireAuth(Dashboard)} />
          </App>
        </BrowserRouter>
      </ApolloProvider>
    );
  };

ReactDOM.render(<Root />, document.getElementById('root'));