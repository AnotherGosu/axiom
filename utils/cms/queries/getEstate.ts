import { gql } from "@apollo/client";
import { fetcher } from "./fetcher";
import { structureEstateObject } from "./helpers";

export default async function getEstate(estateId: string) {
  try {
    const {
      data: { getObject },
    } = await fetcher.query({
      query: GET_ESTATE,
      variables: {
        bucketSlug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG,
        readKey: process.env.NEXT_PUBLIC_COSMIC_READ_KEY,
        estateId,
      },
    });

    return structureEstateObject(getObject);
  } catch (err) {
    console.log(`getEstate error: ${err.message}`);
  }
}

const GET_ESTATE = gql`
  query GetEstate($bucketSlug: String!, $readKey: String!, $estateId: ID!) {
    getObject(
      bucket_slug: $bucketSlug
      read_key: $readKey
      object_id: $estateId
    ) {
      title
      created_at
      metadata
    }
  }
`;
