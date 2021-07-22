import { gql } from "graphql-request";

export const CREATE_USER = gql`
  mutation CreateUser($userData: CustomUserCreateInput!) {
    createCustomUser(data: $userData) {
      id
    }
  }
`;

export const GET_USER = gql`
  query GetUserByIssuer($sub: String) {
    customUser(where: { sub: $sub }) {
      sub
      name
      email
      phone
      contactName
      contactPhone
    }
  }
`;

export const EDIT_USER_PROFILE = gql`
  mutation EditUserProfile($sub: String!, $data: CustomUserUpdateInput!) {
    updateCustomUser(where: { sub: $sub }, data: $data) {
      sub
    }
  }
`;
