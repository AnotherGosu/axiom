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
      res.send({ isLoggedOut: true });
    } else {
      res.send({ isLoggedOut: null });
    }
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).send({ isLoggedOut: false, error });
  }
};
