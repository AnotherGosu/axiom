import { gql } from "graphql-request";
import { client, userHeader } from "./client";
import getCustomUserProfile from "../queries/getCustomUserProfile";

export default async function createCustomUser(user) {
  const { email, sub } = user;

  const existingUser = await getCustomUserProfile(sub);
  if (existingUser) return;

  const metadata = user["https://axiom.vercel.app/user_metadata"];
  const { name: firstName, lastName, patronim, phone } = metadata;

  const name = `${lastName} ${firstName} ${patronim}`;
  //format: "8 (999) 111-22-33"
  const formatedPhone = `8 (${phone.slice(1, 4)}) ${phone.slice(
    4,
    7
  )}-${phone.slice(7, 9)}-${phone.slice(9, 11)}`;

  const userData = {
    email,
    sub,
    name,
    phone: formatedPhone,
    contactName: name,
    contactPhone: formatedPhone,
  };

  return client.request(CREATE_USER, { userData }, userHeader);
}

export const CREATE_USER = gql`
  mutation CreateCustomtUser($userData: CustomUserCreateInput!) {
    createCustomUser(data: $userData) {
      id
    }
  }
`;
