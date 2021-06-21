import { setCookie, parseCookies, destroyCookie } from "nookies";
import type { NextApiResponse } from "next";

export const MAX_AGE = 60 * 60 * 24 * 7; // 7 days
const TOKEN_NAME = "token";

export function setTokenCookie(res: NextApiResponse, token: string) {
  const options = {
    maxAge: MAX_AGE,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  };
  setCookie({ res }, TOKEN_NAME, token, options);
}

export function removeTokenCookie(res: NextApiResponse) {
  destroyCookie({ res }, TOKEN_NAME, { path: "/" });
}

export function getTokenCookie(req) {
  let cookies;

  if (req.cookies) {
    // For API Routes we don't need to parse the cookies.
    cookies = req.cookies;
  } else {
    // For pages we do need to parse the cookies.
    cookies = parseCookies({ req });
  }

  return cookies[TOKEN_NAME];
}
