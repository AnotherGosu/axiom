import { gql } from "graphql-request";
import { fetcher } from "./fetcher";
import getClientProfile from "../queries/getClientProfile";

export default async function createCustomUser(client) {
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

  return fetcher.request(CREATE_CLIENT, { clientData });
}

export const CREATE_CLIENT = gql`
  mutation CreateClient($clientData: ClientCreateInput!) {
    createClient(data: $clientData) {
      id
    }
  }
`;
