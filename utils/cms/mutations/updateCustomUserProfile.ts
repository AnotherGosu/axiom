import { gql } from "graphql-request";
import { client } from "./client";
import type { customUserProfileServer } from "utils/types/forms";

export default async function updateCustomUserProfile(
  formData: customUserProfileServer
) {
  const { sub, ...data } = formData;
  console.log(data);
  return client.request(UPDATE_CUSTOM_USER, { data, sub });
}

export const UPDATE_CUSTOM_USER = gql`
  mutation CreateCustomtUser($data: CustomUserUpdateInput!, $sub: String) {
    updateCustomUser(data: $data, where: { sub: $sub }) {
      id
    }
  }
`;
