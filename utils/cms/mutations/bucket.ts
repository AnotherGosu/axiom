import Cosmic from "cosmicjs";

const api = Cosmic();
export const bucket = api.bucket({
  slug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG,
  read_key: process.env.NEXT_PUBLIC_COSMIC_READ_KEY,
  write_key: process.env.COSMIC_WRITE_KEY,
});
