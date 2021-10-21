import { createFilters } from "./helpers";
import getEstatesCards from "./getEstatesCards";

export default async function getSearchedEstates({
  query,
  sort = "created_at_dec",
}: {
  query: { [key: string]: string | string[] };
  sort?: "created_at_asc" | "created_at_dec";
}) {
  try {
    const filter = createFilters(query);
    console.log(filter);
    return await getEstatesCards({ filter, sort });
  } catch (err) {
    console.log(`getSearchedEstates error: ${err.message}`);
    return [];
  }
}
