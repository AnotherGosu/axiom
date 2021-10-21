import { NextApiRequest, NextApiResponse } from "next";
import { apiRoute, upload } from "utils/middleware";
import { getSession } from "@auth0/nextjs-auth0";
import addEstate from "utils/cms/mutations/addEstate";
import editEstate from "utils/cms/mutations/editEstate";
import deleteEstate from "utils/cms/mutations/deleteEstate";

interface MulterRequest extends NextApiRequest {
  files: { images: File[]; plan: File[] };
  body: any;
}

apiRoute.use(
  upload.fields([{ name: "images" }, { name: "plan", maxCount: 1 }])
);

apiRoute.post(async (req: MulterRequest, res: NextApiResponse) => {
  try {
    const {
      files: { images = [], plan = [] },
      body,
    } = req;
    const fields = JSON.parse(body.fields);

    const {
      user: { sub },
    } = getSession(req, res);

    const form = { images, plan: plan[0] || null, ...fields };

    await addEstate({
      sub,
      form,
    });

    res.status(200).send("A new estate entry has been added");
  } catch (err) {
    res.status(500).send({ err });
  }
});

apiRoute.patch(async (req: MulterRequest, res: NextApiResponse) => {
  try {
    const {
      files: { images = [], plan = [] },
      body,
    } = req;
    const fields = JSON.parse(body.fields);

    const form = {
      images,
      plan: plan[0] || null,
      ...fields,
    };

    await editEstate(form);

    res.status(200).send("An estate entry has been updated");
  } catch (err) {
    res.status(500).send({ err });
  }
});

apiRoute.delete(async (req: MulterRequest, res: NextApiResponse) => {
  try {
    const {
      body: { estateId },
    } = req;

    await deleteEstate(estateId);

    res.status(200).send("An estate entry has been deleted");
  } catch (err) {
    res.status(500).send({ err });
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
