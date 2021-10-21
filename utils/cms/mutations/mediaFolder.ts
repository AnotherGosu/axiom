import fetch from "node-fetch";

const mediaFoldersApiUrl = `https://api.cosmicjs.com/v2/buckets/${process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG}/media-folders/`;
const authorizationHeader = `Bearer ${process.env.COSMIC_WRITE_KEY}`;

export async function addMediaFolder(mediaFolderTtitle: string) {
  try {
    const res = await fetch(mediaFoldersApiUrl, {
      method: "POST",
      body: JSON.stringify({ title: mediaFolderTtitle }),
      headers: {
        Authorization: authorizationHeader,
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  } catch (err) {
    console.log(`addMediaFolder error: ${err.message}`);
  }
}

export async function deleteMediaFolder(mediaFolderSlug: string) {
  try {
    const res = await fetch(`${mediaFoldersApiUrl}${mediaFolderSlug}`, {
      method: "DELETE",
      headers: {
        Authorization: authorizationHeader,
      },
    });
    return await res.json();
  } catch (err) {
    console.log(`deleteMediaFolder error: ${err.message}`);
  }
}
