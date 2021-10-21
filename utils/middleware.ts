import multer from "multer";
import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";

export const upload = multer({ storage: multer.memoryStorage() });

export const apiRoute = nc({
  onError(error, req: NextApiRequest, res: NextApiResponse) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});
