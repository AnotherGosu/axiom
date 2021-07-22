import { client, authorizationHeader } from "../client";
import { GET_USER, CREATE_USER, EDIT_USER_PROFILE } from "./queries";
import type { User } from "utils/types/user";

export async function createUser(user) {
  const { email, sub } = user;

  const existingUser = await getUser(sub);
  if (existingUser) return;

  const metadata = user["https://axiom.vercel.app/user_metadata"];
  const { name: firstName, lastName, patronim, phone } = metadata;
  const name = `${lastName} ${firstName} ${patronim}`;

  const userData = {
    email,
    sub,
    name,
    phone,
    contactName: name,
    contactPhone: phone,
  };

  return client.request(CREATE_USER, { userData }, authorizationHeader);
}

export async function getUser(sub: string) {
  const { customUser } = await client.request(GET_USER, { sub });
  return customUser as User;
}

export async function editUserProfile(data: User) {
  const { sub, ...rest } = data;
  return await client.request(
    EDIT_USER_PROFILE,
    { sub, data: rest },
    authorizationHeader
  );
}
