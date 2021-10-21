import { bucket } from "./bucket";
import { deleteMediaFolder } from "./mediaFolder";
import { deleteMedia } from "./media";

export default async function deleteEstate(estateId: string) {
  try {
    const { media: estateMedias } = await bucket.getMedia({
      query: { folder: estateId },
      props: "id",
    });
    await Promise.all(estateMedias.map((media) => deleteMedia(media.id)));
    await deleteMediaFolder(estateId);
    await bucket.deleteObject({ id: estateId });
  } catch (err) {
    console.log(`deleteEstate error: ${err.message}`);
  }
}
