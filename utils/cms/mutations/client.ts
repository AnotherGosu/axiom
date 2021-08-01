import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHCMS_API_URL
);

export const estateHeader = {
  authorization: `Bearer ${process.env.GRAPHCMS_ESTATE_MUTATION_TOKEN}`,
};

export const assetHeader = {
  authorization: `Bearer ${process.env.GRAPHCMS_ASSET_MUTATION_TOKEN}`,
};

export const userHeader = {
  authorization: `Bearer ${process.env.GRAPHCMS_CUSTOM_USER_MUTATION_TOKEN}`,
};
