import { Box } from "@chakra-ui/react";
import ControlBar from "./ControlBar";
import SearchResultsList from "./SearchResultsList";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../Map"), { ssr: false });
import type { EstateCard } from "utils/types/estate";
import useSWR from "swr";
import getSearchedEstates from "utils/cms/queries/getSearchedEstates";
import { useRouter } from "next/router";
import { useState } from "react";

const fetcher = async (
  key: string,
  query: { [key: string]: string | string[] },
  sort: any
) => {
  const estates = await getSearchedEstates({ query, sort });
  return estates;
};

interface Props {
  initialEstates: EstateCard[];
}

export default function SearchResults({ initialEstates }: Props) {
  const [sort, setSort] = useState("created_at_dec");
  const [isMapView, setIsMapView] = useState(false);

  const { query } = useRouter();
  const {
    data: estates,
    error,
    isValidating,
  } = useSWR(["searchEstates", query, sort], fetcher, {
    initialData: initialEstates,
  });
  if (error) console.log(error);

  return (
    <Box>
      <ControlBar
        sort={sort}
        setSort={setSort}
        isMapView={isMapView}
        setIsMapView={setIsMapView}
      />

      {isMapView ? (
        <Map estates={estates} />
      ) : (
        <SearchResultsList estates={estates} isValidating={isValidating} />
      )}
    </Box>
  );
}
