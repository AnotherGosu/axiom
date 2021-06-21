import type { NextApiRequest, NextApiResponse } from "next";
import { getLoginSession } from "utils/auth/session";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getLoginSession(req);

  res.send({ user: session || null });
};
