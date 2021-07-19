import { Box } from "@chakra-ui/react";
import ControlBar from "./ControlBar";
import SearchResultsList from "./SearchResultsList";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../Map"), { ssr: false });
import type { EstateCard } from "utils/types/estate";
import useSWR from "swr";
import { getSearchedEstates } from "utils/cms/estate/requests";
import { useRouter } from "next/router";
import { useState } from "react";

const fetcher = async (
  key: string,
  query: { [key: string]: string | string[] },
  orderBy: string
) => {
  const estates = await getSearchedEstates({ query, orderBy });
  return estates;
};

interface Props {
  initialEstates: EstateCard[];
}

export default function SearchResults({ initialEstates }: Props) {
  const [orderBy, setOrderBy] = useState("createdAt_DESC");
  const [isMapView, setIsMapView] = useState(false);

  const { query } = useRouter();
  const {
    data: estates,
    error,
    isValidating,
  } = useSWR(["searchEstates", query, orderBy], fetcher, {
    initialData: initialEstates,
  });
  if (error) console.log(error);

  return (
    <Box>
      <ControlBar
        orderBy={orderBy}
        setOrderBy={setOrderBy}
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
