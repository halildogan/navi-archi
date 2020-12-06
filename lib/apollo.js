import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink, createHttpLink } from "apollo-link-http";

const token = false;

const cache = new InMemoryCache();
const url = process.env.REACT_APP_SERVER_URL || "http://localhost:4000/";
export const client = new ApolloClient({
    // Provide required constructor fields
    cache,
    link: new createHttpLink({
      headers: { authorization: token ? `Bearer ${token}` : ""},
      uri: url,
    }),
    // Provide some optional constructor fields
    name: "lapadi-app-client",
    version: "1.0.1",
    queryDeduplication: false,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
      mutate: {
        errorPolicy: 'all',
      },
    },
});