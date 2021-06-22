import type { NextApiRequest, NextApiResponse } from "next";
import { magic } from "utils/auth/magicAdmin";
import { removeTokenCookie } from "utils/auth/cookies";
import { getLoginSession } from "utils/auth/session";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = await getLoginSession(req);

    if (session) {
      await magic.users.logoutByIssuer(session.issuer);
      removeTokenCookie(res);
    }
  } catch (error) {
    console.error(error);
  }
  res.writeHead(302, { Location: "/" });
  res.end();
};
