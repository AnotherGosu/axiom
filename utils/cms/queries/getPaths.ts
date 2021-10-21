import { gql } from "@apollo/client";
import { fetcher } from "./fetcher";

export default async function getPaths() {
  try {
    const {
      data: {
        getObjects: { objects },
      },
    } = await fetcher.query({
      query: GET_PATHS,
      variables: {
        bucketSlug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG,
        readKey: process.env.NEXT_PUBLIC_COSMIC_READ_KEY,
      },
    });
    return objects.map(({ id }) => ({ params: { id } }));
  } catch (err) {
    console.log(`getPaths error: ${err.message}`);
    return [];
  }
}

const GET_PATHS = gql`
  query GetPaths($bucketSlug: String!, $readKey: String) {
    getObjects(
      bucket_slug: $bucketSlug
      read_key: $readKey
      input: { query: { type: "estates" }, props: "id" }
    ) {
      objects {
        id
      }
    }
  }
`;
