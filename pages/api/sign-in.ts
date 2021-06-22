import type { NextApiRequest, NextApiResponse } from "next";
import { magic } from "utils/auth/magicAdmin";
import { setLoginSession } from "utils/auth/session";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const didToken = magic.utils.parseAuthorizationHeader(
      req.headers.authorization
    );

    const metadata = await magic.users.getMetadataByToken(didToken);

    await setLoginSession(res, metadata);

    res.send({ issuer: metadata.issuer });
  } catch (error) {
    res.status(error.status || 500).end(error.message);
  }
};
