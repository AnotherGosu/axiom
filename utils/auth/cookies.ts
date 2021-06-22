import { serialize, parse } from "cookie";
import type { NextApiResponse } from "next";

export const MAX_AGE = 60 * 60 * 24 * 7; // 7 days
const TOKEN_NAME = "token";

export function setTokenCookie(res: NextApiResponse, token: string) {
  const cookie = serialize(TOKEN_NAME, token, {
    maxAge: MAX_AGE,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });

  res.setHeader("Set-Cookie", cookie);
}

export function removeTokenCookie(res: NextApiResponse) {
  const cookie = serialize(TOKEN_NAME, "", {
    maxAge: -1,
    path: "/",
  });

  res.setHeader("Set-Cookie", cookie);
}

export function getTokenCookie(req) {
  let cookies;

  if (req.cookies) {
    // For API Routes we don't need to parse the cookies.
    cookies = req.cookies;
  } else {
    // For pages we do need to parse the cookies.
    cookies = parse(req.headers?.cookie || "");
  }

  return cookies[TOKEN_NAME];
}
