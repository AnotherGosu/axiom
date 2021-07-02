import { gql } from "graphql-request";

export const CREATE_USER = gql`
  mutation CreateUser(
    $issuer: String!
    $name: String
    $email: String!
    $phone: String
  ) {
    createCustomUser(
      data: {
        issuer: $issuer
        name: $name
        email: $email
        phone: $phone
        contactName: $name
        contactPhone: $phone
      }
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
      contactName
      contactPhone
    }
  }
`;

// export const EDIT_USER_PROFILE = gql`
//   mutation EditUserProfile(
//     $issuer: String!
//     $name: String
//     $phone: String
//     $email: String
//     $contactName: String
//     $contactPhone: String
//   ) {
//     updateCustomUser(
//       where: { issuer: $issuer }
//       data: {
//         name: $name
//         phone: $phone
//         email: $email
//         contactName: $contactName
//         contactPhone: $contactPhone
//       }
//     ) {
//       issuer
//     }
//   }
// `;

export const EDIT_USER_PROFILE = gql`
  mutation EditUserProfile($issuer: String!, $data: CustomUserUpdateInput!) {
    updateCustomUser(where: { issuer: $issuer }, data: $data) {
      issuer
    }
  }
`;
