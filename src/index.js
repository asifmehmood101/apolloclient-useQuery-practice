import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//create a client
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://71z1g.sse.codesandbox.io/',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
