import { gql } from "graphql-request";

export const CREATE_USER = gql`
  mutation CreateUser(
    $name: String
    $email: String!
    $phone: String
    $issuer: String!
  ) {
    createCustomUser(
      data: { name: $name, email: $email, phone: $phone, issuer: $issuer }
    ) {
      id
    }
  }
`;

export const GET_USER_BY_EMAIL = gql`
  query GetUserByEmail($email: String) {
    customUser(where: { email: $email }) {
      email
    }
  }
`;

export const GET_USER = gql`
  query GetUserByIssuer($issuer: String) {
    customUser(where: { issuer: $issuer }) {
      issuer
      name
      email
      phone
    }
  }
`;
