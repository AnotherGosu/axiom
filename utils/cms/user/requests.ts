import { client, authorizationHeader } from "../client";
import { GET_USER_BY_EMAIL, GET_USER, CREATE_USER } from "./queries";
import type { User } from "utils/types/user";

export async function createUser(userData: User) {
  return client.request(CREATE_USER, { ...userData }, authorizationHeader);
}

export async function getUser(issuer: string) {
  const { customUser } = await client.request(GET_USER, { issuer });
  return customUser as User;
}

export async function getUserByEmail(email: string) {
  const { customUser } = await client.request(GET_USER_BY_EMAIL, { email });
  return customUser;
}
