import { RawEstate, Estate, Tags, Building, Apartment } from "./types";
import { EstateType } from "./localizations";

export function structureEstate(rawEstate: RawEstate) {
  const title = getEstateTitle(rawEstate.rooms, rawEstate.estateType);

  const {
    isBargaining,
    isMortgage,
    buildingType,
    materialType,
    builtYear,
    parkingType,
    isElevator,
    isServiceElevator,
    isRestrictedArea,
    commonSquare,
    livingSquare,
    kitchenSquare,
    floor,
    allFloors,
    balconies,
    loggias,
    windowsType,
    state,
    plateType,
    bathType,
    isRemodeled,
    isRoomsFurniture,
    isKitchenFurniture,
    rooms,
    roomsType,
    ...rest
  } = rawEstate;

  const tags: Tags = { isBargaining, isMortgage };

  const building: Building = {
    buildingType,
    materialType,
    builtYear,
    parkingType,
    isElevator,
    isServiceElevator,
    isRestrictedArea,
  };

  const apartment: Apartment = {
    rooms,
    roomsType,
    commonSquare,
    livingSquare,
    kitchenSquare,
    floor,
    allFloors,
    balconies,
    loggias,
    windowsType,
    state,
    plateType,
    bathType,
    isRemodeled,
    isRoomsFurniture,
    isKitchenFurniture,
  };

  const estate: Estate = { title, tags, apartment, building, ...rest };

  return estate;
}

function getEstateTitle(rooms: number, estateType: string) {
  if (estateType !== "apartment") {
    return EstateType[estateType];
  } else if (rooms === 0) {
    return "Студия";
  } else {
    return `${rooms}-комнатная квартира`;
  }
}
