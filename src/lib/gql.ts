import { GraphQLClient } from 'graphql-request';
import { getSdk } from '@/gql/__generated__/requests';

export const client = new GraphQLClient(process.env.ANNICT_ENDPOINT as string, {
  headers: {
    Authorization: `bearer ${process.env.ANNICT_ACCESS_TOKEN as string}`,
  },
});

export const sdk = getSdk(client);
