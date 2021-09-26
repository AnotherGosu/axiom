import { gql } from "graphql-request";
import { fetcher } from "./fetcher";
import type { ClientProfileServer } from "utils/types/forms";

export default async function updateClientProfile(
  formData: ClientProfileServer
) {
  const { sub, ...data } = formData;
  return fetcher.request(UPDATE_CLIENT, { data, sub });
}

export const UPDATE_CLIENT = gql`
  mutation CreateClient($data: ClientInput!, $sub: String) {
    updateClient(data: $data, where: { sub: $sub }) {
      id
    }
  }
`;
