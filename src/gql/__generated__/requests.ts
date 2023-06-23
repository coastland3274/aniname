import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
import * as Types from './types';

export const GetWorksBySeasonDocument = gql`
  query getWorksBySeason($season: String!) {
    searchWorks(
      seasons: [$season]
      orderBy: { field: WATCHERS_COUNT, direction: DESC }
    ) {
      edges {
        node {
          annictId
          titleEn
          media
          officialSiteUrl
          twitterUsername
        }
      }
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    getWorksBySeason(
      variables: Types.GetWorksBySeasonQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<Types.GetWorksBySeasonQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.GetWorksBySeasonQuery>(
            GetWorksBySeasonDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'getWorksBySeason',
        'query'
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
