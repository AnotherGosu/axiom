import type { NextApiRequest, NextApiResponse } from "next";
import { apiRoute, upload } from "utils/middleware";
import { getSession } from "@auth0/nextjs-auth0";
import editClientProfile from "utils/cms/mutations/editClientProfile";

interface MulterRequest extends NextApiRequest {
  file: File;
  body: any;
}

apiRoute.use(upload.single("avatar"));

apiRoute.patch(async (req: MulterRequest, res: NextApiResponse) => {
  try {
    const { file, body } = req;
    const fields = JSON.parse(body.fields);

    const {
      user: { sub },
    } = getSession(req, res);

    await editClientProfile({ sub, ...fields });

    res.status(200).send("A client entry has been updated");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
