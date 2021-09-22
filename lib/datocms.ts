import { GraphQLClient } from "graphql-request";

interface GraphQLRequest {
  query: string;
  variables: object;
}

export function request({ query, variables }: GraphQLRequest) {
  const endpoint: string = "https://graphql.datocms.com/";

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    },
  });

  return client.request(query, variables);
}
