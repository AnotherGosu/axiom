import { CMSEstate, Estate, Apartment, Building } from "./types/estate";
import { EstateType } from "./localizations";

export function structureEstate(estate: CMSEstate): Estate {
  const { images = [], rooms = "", estateType = "Объект" } = estate;

  const title = getEstateTitle({ rooms, estateType });

  const firstImage = images[0];
  const defaultPreview = { url: "/logo.svg" };
  const preview = firstImage ? firstImage : defaultPreview;

  return { ...estate, title, preview };
}

function getEstateTitle({
  rooms,
  estateType,
}: {
  rooms: string;
  estateType: string;
}) {
  switch (estateType) {
    case "apartment": {
      if (rooms === "freePlaning") {
        return "Свободная планировка";
      } else if (rooms === "studio") {
        return "Студия";
      } else {
        return `${rooms}-комнатная квартира`;
      }
    }
    default: {
      return EstateType[estateType];
    }
  }
}

export function getApartmentAndBuildingProps(estate: Estate) {
  const {
    rooms,
    commonSquare,
    livingSquare,
    kitchenSquare,
    floor,
    allFloors,
    balconies,
    loggias,
    roomsType,
    windowsType,
    state,
    plateType,
    bathType,
    isRemodeled,
    isRoomsFurniture,
    isKitchenFurniture,
    builtYear,
    buildingType,
    materialType,
    parkingType,
    isElevator,
    isServiceElevator,
    isRestrictedArea,
  } = estate;
  const apartment: Apartment = {
    rooms,
    commonSquare,
    livingSquare,
    kitchenSquare,
    floor,
    allFloors,
    balconies,
    loggias,
    roomsType,
    windowsType,
    state,
    plateType,
    bathType,
    isRemodeled,
    isRoomsFurniture,
    isKitchenFurniture,
  };
  const building: Building = {
    builtYear,
    buildingType,
    materialType,
    parkingType,
    isElevator,
    isServiceElevator,
    isRestrictedArea,
  };
  return { apartment, building };
}
