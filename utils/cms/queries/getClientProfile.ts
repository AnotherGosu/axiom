import { gql } from "graphql-request";
import { fetcher } from "./fetcher";
import type { ClientProfile } from "utils/types/client";

export default async function getClientProfile(sub: string) {
  const { client } = await fetcher.request(GET_CLIENT_PROFILE, { sub });
  return client as ClientProfile;
}

const GET_CLIENT_PROFILE = gql`
  query GetClientProfile($sub: String) {
    client(where: { sub: $sub }) {
      email
      name
      phone
      contactName
      contactPhone
    }
  }
`;
