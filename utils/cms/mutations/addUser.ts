import getUser from "../queries/getUser";
import { bucket } from "./bucket";
import { createMetafield } from "./helpers";

export default async function addUser(user) {
  try {
    const { email, sub } = user;

    if (await getUser(sub)) return;

    const userData = {
      email,
      sub,
      name: "",
      phone: "",
      contactName: "",
      contactPhone: "",
    };

    const metafields = Object.entries(userData).map((field) =>
      createMetafield(field)
    );

    await bucket.addObject({
      title: email,
      type: "users",
      metafields,
      options: {
        slug_field: false,
      },
    });
  } catch (err) {
    console.log(`addUser error: ${err.message}`);
  }
}
