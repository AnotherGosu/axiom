import type { NextApiRequest, NextApiResponse } from "next";
import type { File as FormidableFile } from "formidable";
import { parseMultipartForm } from "utils/middleware";
import nc from "next-connect";
import { getSession } from "@auth0/nextjs-auth0";
import updateCustomUserProfile from "utils/cms/mutations/updateCustomUserProfile";

interface ExtendedRequest extends NextApiRequest {
  files: { image: FormidableFile };
}

const handler = nc<ExtendedRequest, NextApiResponse>();
handler.use(parseMultipartForm);

handler.patch(async (req, res) => {
  try {
    const { body } = req;
    const fields = JSON.parse(body.fields);

    const {
      user: { sub },
    } = getSession(req, res);

    const data = { ...fields, sub };

    await updateCustomUserProfile(data);

    res.status(200).send("A custom user entry has been updated");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};