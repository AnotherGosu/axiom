import SearchResultsCardContent from "./SearchResultsCardContent";
import { EstateCard } from "utils/types/estate";
import EstateCardsList from "components/common/EstateCardsList";
import useSWR from "swr";
import { getSearchedEstates } from "utils/cms/estate/requests";
import { useRouter } from "next/router";

const fetcher = async (
  key: string,
  query: { [key: string]: string | string[] }
) => {
  const estates = await getSearchedEstates(query);
  return estates;
};

interface Props {
  initialEstates: EstateCard[];
}

export default function SearchResultsList({ initialEstates }: Props) {
  const { query } = useRouter();
  const { data: estates, error } = useSWR(["searchEstates", query], fetcher, {
    initialData: initialEstates,
  });
  if (error) console.log(error);

  return (
    <EstateCardsList
      estates={estates}
      CardContent={SearchResultsCardContent}
      templateColumns={{
        base: "1fr",
        md: "1fr 1fr",
        xl: "repeat(3, 1fr)",
      }}
    />
  );
}
