import { addMedia } from "./media";
import { createEstateMetafields, createEstateTitle } from "./helpers";
import getUser from "../queries/getUser";
import { bucket } from "./bucket";
import { addMediaFolder } from "./mediaFolder";
import { AddEstateForm } from "utils/types/forms";

export default async function addEstate({
  sub,
  form,
}: {
  sub: string;
  form: AddEstateForm;
}) {
  try {
    const {
      object: { id: estateId },
    } = await bucket.addObject({
      title: "New estate",
      type: "estates",
      options: {
        slug_field: false,
      },
    });

    await addMediaFolder(estateId);
    const { id: userId } = await getUser(sub);

    const { images, plan, ...fields } = form;

    const imagesMedia = await Promise.all(
      images.map((image) => {
        return addMedia({
          file: image,
          folder: estateId,
          metadata: { type: "image" },
        });
      })
    );

    const planMedia = await addMedia({
      file: plan,
      folder: estateId,
      metadata: { type: "plan" },
    });

    const metafields = createEstateMetafields({
      userId,
      images: imagesMedia,
      plan: planMedia,
      fields,
    });

    const title = createEstateTitle({
      estateType: fields.estateType,
      rooms: fields.rooms,
    });

    return await bucket.editObject({
      id: estateId,
      title,
      metafields,
    });
  } catch (err) {
    console.log(`addEstate error: ${err.message}`);
  }
}
