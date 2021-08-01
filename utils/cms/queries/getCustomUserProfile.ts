import { gql } from "graphql-request";
import { client } from "./client";
import type { customUserProfile } from "utils/types/customUser";

export default async function getUser(sub: string) {
  const { customUser } = await client.request(GET_USER, { sub });

  return customUser as customUserProfile;
}

const GET_USER = gql`
  query GetUserByIssuer($sub: String) {
    customUser(where: { sub: $sub }) {
      name
      phone
      contactName
      contactPhone
    }
  }
`;
