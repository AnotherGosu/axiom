import getEstatesCards from "./getEstatesCards";
import getUserId from "./getUserId";

export default async function getUserEstates({
  sub,
  sort,
}: {
  sub: string;
  sort?: "created_at_asc" | "created_at_dec";
}) {
  const userId = await getUserId(sub);
  const filter = { "metadata.creator.id": userId };
  return await getEstatesCards({ filter, sort });
}
