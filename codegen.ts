import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    'https://api.annict.com/graphql': {
      headers: {
        Authorization: `bearer ${process.env.ANNICT_ACCESS_TOKEN}`,
      },
    },
  },
  documents: 'src/**/*.{tsx,graphql}',
  generates: {
    'src/gql/__generated__/types.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
    'src/gql/__generated__/requests.ts': {
      preset: 'import-types',
      presetConfig: {
        typesPath: './types',
      },
      plugins: ['typescript-graphql-request'],
    },
  },
  hooks: {
    afterOneFileWrite: 'prettier --write',
  },
};

export default config;
