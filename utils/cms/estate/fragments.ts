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

export const FULL_ESTATE = gql`
  fragment FullEstate on Estate {
    id
    createdAt
    estateType
    price
    address
    rooms
    commonSquare
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
    builtYear
    buildingType
    materialType
    parkingType
    isElevator
    isServiceElevator
    isRestrictedArea
  }
`;
