import type { File as FormidableFile } from "formidable";
import FormData from "form-data";
import fetch from "node-fetch";
import fs from "fs";

export default async function uploadAsset(file: FormidableFile) {
  if (!file) return;

  try {
    const form = new FormData();
    form.append("fileUpload", fs.createReadStream(file.path));

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_GRAPHCMS_API_URL}/upload`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GRAPHCMS_MUTATION_TOKEN}`,
        },
        body: form,
      }
    );

    const { id: assetId } = await res.json();
    return assetId as String;
  } catch (err) {
    console.log(err);
    return null;
  }
}
