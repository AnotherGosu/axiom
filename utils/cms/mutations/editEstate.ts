import { bucket } from "./bucket";
import { deleteMedia, addMedia } from "./media";
import type { EditEstateForm } from "utils/types/forms";
import { createEstateMetafields, createEstateTitle } from "./helpers";

export default async function editEstate(form: EditEstateForm) {
  try {
    const {
      userId,
      id: estateId,
      images,
      plan,
      orderedImages,
      mediaList,
      planUrl,
      ...fields
    } = form;

    const planIndex = mediaList
      .map(({ metadata }) => metadata.type)
      .indexOf("plan");
    const existingPlan =
      planIndex === -1 ? null : mediaList.splice(planIndex, 1)[0];

    const imagesMedia = await Promise.all(
      orderedImages.map((image) => {
        if (image.startsWith("https://cdn.cosmicjs.com/")) {
          return mediaList.find((media) => media.url === image);
        } else {
          //uplaoded image (image is a name of a file)
          const addedFile = images.find(
            (file: any) => file.originalname === image
          );
          return addMedia({
            file: addedFile,
            folder: estateId,
            metadata: { type: "image" },
          });
        }
      })
    );

    const deletedMedia = mediaList.filter(({ name: existingName }) => {
      //find mediaList images that are not in imagesMedia
      return !imagesMedia.some(({ name }) => existingName === name);
    });

    const planMedia = await addMedia({
      file: plan,
      folder: estateId,
      metadata: { type: "plan" },
    });
    if ((existingPlan && plan) || (existingPlan && !planUrl)) {
      //user uploaded new plan OR user deleted old plan
      deletedMedia.push(existingPlan);
    }

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

    await bucket.editObject({
      id: estateId,
      title,
      metafields,
    });
    await Promise.all(deletedMedia.map((media) => deleteMedia(media.id)));
  } catch (err) {
    console.log(`editEstate error: ${err.message}`);
  }
}
