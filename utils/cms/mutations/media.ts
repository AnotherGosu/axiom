import { bucket } from "./bucket";
import type { Media } from "utils/types/common";

export async function addMedia({
  file,
  folder = "",
  metadata,
}: {
  file: File;
  folder?: string;
  metadata?: any;
}) {
  if (!file) return;
  try {
    const data = await bucket.addMedia({
      media: file,
      folder,
      metadata,
    });
    return data.media as Media;
  } catch (err) {
    console.log(`addMedia error: ${err.message}`);
  }
}

export async function getMediaList(folder: string) {
  try {
    const { media } = await bucket.getMedia({
      query: { folder },
      props: "id,name,url,metadata",
    });
    return media as Media[];
  } catch (err) {
    console.log(`getMediaList error: ${err.message}`);
    return [];
  }
}

export async function deleteMedia(mediaId: string) {
  try {
    return await bucket.deleteMedia({ id: mediaId });
  } catch (err) {
    console.log(`deleteMedia error: ${err.message}`);
  }
}
