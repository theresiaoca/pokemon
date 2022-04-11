import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { GRAPHQL_URL } from "config";

const httpLink = createUploadLink({
  uri: GRAPHQL_URL,
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),

  link: ApolloLink.from([httpLink]),
});
