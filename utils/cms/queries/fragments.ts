import { gql } from "graphql-request";

export const ESTATE_CARD = gql`
  fragment EstateCard on Estate {
    images(first: 1) {
      id
      url
    }
    id
    createdAt
    estateType
    location {
      longitude
      latitude
    }
    price
    address
    rooms
    commonSquare
    isBargaining
    isMortgage
  }
`;

export const ESTATE_COMMON_FIELDS = gql`
  fragment EstateCommonFields on Estate {
    id
    createdAt
    estateType
    price
    address
    rooms
    isBargaining
    isMortgage
    images {
      id
      url
    }
    plan {
      id
      url
    }
    videoUrl
    description
    location {
      longitude
      latitude
    }
    dealType
    rentType
    agencyServicePrice
  }
`;

export const ESTATE_APARTMENT = gql`
  fragment EstateApartment on Estate {
    rooms
    commonSquare
    livingSquare
    kitchenSquare
    floor
    allFloors
    balconies
    loggias
    roomsType
    windowsType
    state
    apartmentStatus
    bathType
    isRemodeled
    isRoomsFurniture
    isKitchenFurniture
  }
`;

export const ESTATE_BUILDING = gql`
  fragment EstateBuilding on Estate {
    builtYear
    materialType
    ceilingType
    ceilingHeight
    parkingType
    plateType
    isElevator
    isServiceElevator
  }
`;
