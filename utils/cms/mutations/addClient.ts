import getClientProfile from "../queries/getClientProfile";
import { bucket } from "./bucket";
import { createMetafield } from "./helpers";

export default async function addClient(client) {
  try {
    const { email, sub } = client;

    const existingClient = await getClientProfile(sub);
    if (existingClient) return;

    const metadata = client["https://axiom.vercel.app/user_metadata"];
    const { name: firstName, lastName, patronim, phone } = metadata;

    const name = `${lastName} ${firstName} ${patronim}`;
    //format: "8 (999) 111-22-33"
    const formatedPhone = `8 (${phone.slice(1, 4)}) ${phone.slice(
      4,
      7
    )}-${phone.slice(7, 9)}-${phone.slice(9, 11)}`;

    const clientData = {
      email,
      sub,
      name,
      phone: formatedPhone,
      contactName: name,
      contactPhone: formatedPhone,
    };

    const metafields = Object.entries(clientData).map((field) =>
      createMetafield(field)
    );

    await bucket.addObject({
      title: email,
      type: "clients",
      metafields,
      options: {
        slug_field: false,
      },
    });
  } catch (err) {
    console.log(`addClient error: ${err.message}`);
  }
}
