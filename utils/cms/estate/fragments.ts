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
    apartmentType
    agentName
    agentPhone
    agencyServicePrice
    customUser {
      name
      phone
    }
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
    plateType
    bathType
    isRemodeled
    isRoomsFurniture
    isKitchenFurniture
  }
`;

export const ESTATE_BUILDING = gql`
  fragment EstateBuilding on Estate {
    builtYear
    buildingType
    materialType
    parkingType
    isElevator
    isServiceElevator
    isRestrictedArea
  }
`;
