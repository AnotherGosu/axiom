import getEstatesCards from "./getEstatesCards";
import getClientId from "./getClientId";

export default async function getClientEstates({
  sub,
  sort,
}: {
  sub: string;
  sort?: "created_at_asc" | "created_at_dec";
}) {
  const clientId = await getClientId(sub);
  const filter = { "metadata.creator.id": clientId };
  return await getEstatesCards({ filter, sort });
}
