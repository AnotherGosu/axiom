import { Flex } from "@chakra-ui/react";
import SortMenu from "components/common/SortMenu";
import MapViewButton from "./MapViewButton";

interface Props {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  isMapView: boolean;
  setIsMapView: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ControlBar({
  sort,
  setSort,
  isMapView,
  setIsMapView,
}: Props) {
  return (
    <Flex gridGap="20px" mb="30px" flexWrap="wrap">
      <SortMenu sort={sort} setSort={setSort} />
      <MapViewButton isMapView={isMapView} setIsMapView={setIsMapView} />
    </Flex>
  );
}
