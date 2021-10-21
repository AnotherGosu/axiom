import { bucket } from "./bucket";
import { createMetafield } from "./helpers";
import type { ClientProfileForm } from "utils/types/forms";

export default async function editClientProfile(form: ClientProfileForm) {
  try {
    const { id, ...fields } = form;
    const metafields = Object.entries(fields).map((field) =>
      createMetafield(field)
    );

    await bucket.editObject({
      id,
      metafields,
    });
  } catch (err) {
    console.log(`editClientProfile error: ${err.message}`);
  }
}
