import type { NextApiResponse } from "next";
import type { MagicUserMetadata } from "@magic-sdk/admin";
import Iron from "@hapi/iron";
import { MAX_AGE, setTokenCookie, getTokenCookie } from "./cookies";

const TOKEN_SECRET = process.env.TOKEN_SECRET;

export async function setLoginSession(
  res: NextApiResponse,
  metadata: MagicUserMetadata
) {
  const createdAt = Date.now();

  const session = { ...metadata, createdAt, maxAge: MAX_AGE };
  const token = await Iron.seal(session, TOKEN_SECRET, Iron.defaults);

  setTokenCookie(res, token);
}

export async function getLoginSession(req) {
  const token = getTokenCookie(req);

  if (!token) return;

  const session = await Iron.unseal(token, TOKEN_SECRET, Iron.defaults);
  const expiresAt = session.createdAt + session.maxAge * 1000;

  // Validate the expiration date of the session
  if (Date.now() > expiresAt) {
    throw new Error("Session expired");
  }

  return session;
}
