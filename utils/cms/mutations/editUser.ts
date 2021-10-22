import { bucket } from "./bucket";
import { createMetafield } from "./helpers";
import type { User } from "utils/types/user";

export default async function editUser(form: User) {
  try {
    const { id, created_at, ...fields } = form;
    const metafields = Object.entries(fields).map((field) =>
      createMetafield(field)
    );

    await bucket.editObject({
      id,
      metafields,
    });
  } catch (err) {
    console.log(`editUser error: ${err.message}`);
  }
}
