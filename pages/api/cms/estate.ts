import type { NextApiRequest, NextApiResponse } from "next";
import type { File as FormidableFile } from "formidable";
import { parseMultipartForm } from "utils/middleware";
import nc from "next-connect";
import { getSession } from "@auth0/nextjs-auth0";
import createEstate from "utils/cms/mutations/createEstate";
import updateEstate from "utils/cms/mutations/updateEstate";
import deleteEstate from "utils/cms/mutations/deleteEstate";

interface ExtendedRequest extends NextApiRequest {
  files: { images: FormidableFile | FormidableFile[]; plan: FormidableFile };
}

const handler = nc<ExtendedRequest, NextApiResponse>();
handler.use(parseMultipartForm);

handler.post(async (req, res) => {
  try {
    const {
      files: { images = [], plan },
      body,
    } = req;
    const fields = JSON.parse(body.fields);
    const formData = {
      ...fields,
      //a single image or an array of images
      images: images instanceof Array ? images : [images],
      plan,
    };

    const {
      user: { sub },
    } = getSession(req, res);

    await createEstate({ formData, sub });

    res.status(200).send("A new estate entry has been createad");
  } catch (err) {
    console.log(err);
    res.status(500).send({ err });
  }
});

handler.patch(async (req, res) => {
  try {
    const {
      files: { images, plan },
      body,
    } = req;
    const fields = JSON.parse(body.fields);

    const formData = {
      ...fields,
      //convert single image to an array
      images: images instanceof Array ? images : [images],
      plan,
    };

    await updateEstate(formData);

    res.status(200).send("An estate entry has been updated");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
});

handler.delete(async (req, res) => {
  try {
    const {
      body: { estateId },
    } = req;

    await deleteEstate(estateId);

    res.status(200).send("An estate entry has been deleted");
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
