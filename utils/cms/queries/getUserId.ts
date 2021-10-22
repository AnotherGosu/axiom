import { gql } from "@apollo/client";
import { fetcher } from "./fetcher";

export default async function getUserId(sub: string) {
  const query = { type: "users", "metadata.sub": sub };

  try {
    const {
      data: {
        getObjects: { objects },
      },
    } = await fetcher.query({
      query: GET_USER_ID,
      variables: {
        bucketSlug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG,
        readKey: process.env.NEXT_PUBLIC_COSMIC_READ_KEY,
        query,
      },
    });
    return objects[0].id;
  } catch (err) {
    console.log(`getClientId error: ${err.message}`);
  }
}

const GET_USER_ID = gql`
  query GetClientProfile(
    $bucketSlug: String!
    $readKey: String!
    $query: JSON
  ) {
    getObjects(
      bucket_slug: $bucketSlug
      read_key: $readKey
      input: { query: $query, props: "id" }
    ) {
      objects {
        id
      }
    }
  }
`;
