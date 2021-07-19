import { Button } from "@chakra-ui/react";
import { IoLocationSharp } from "react-icons/io5";
import { BsListUl } from "react-icons/bs";

interface Props {
  isMapView: boolean;
  setIsMapView: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MapViewButton({ isMapView, setIsMapView }: Props) {
  return (
    <Button
      leftIcon={isMapView ? <BsListUl /> : <IoLocationSharp />}
      variant="outline"
      onClick={() => setIsMapView(!isMapView)}
    >
      {isMapView ? "Список" : "Карта"}
    </Button>
  );
}
