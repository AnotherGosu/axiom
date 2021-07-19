import { Flex } from "@chakra-ui/react";
import OrderByMenu from "components/common/OrderByMenu";
import MapViewButton from "./MapViewButton";

interface Props {
  orderBy: string;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
  isMapView: boolean;
  setIsMapView: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ControlBar({
  orderBy,
  setOrderBy,
  isMapView,
  setIsMapView,
}: Props) {
  return (
    <Flex gridGap="20px" mb="30px" flexWrap="wrap">
      <OrderByMenu orderBy={orderBy} setOrderBy={setOrderBy} />
      <MapViewButton isMapView={isMapView} setIsMapView={setIsMapView} />
    </Flex>
  );
}
