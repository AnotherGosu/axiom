import { gql } from "graphql-request";
import {
  ESTATE_CARD,
  ESTATE_COMMON_FIELDS,
  ESTATE_APARTMENT,
  ESTATE_BUILDING,
} from "./fragments";

export const GET_ESTATE = gql`
  query GetEstate($id: ID!) {
    commonFields: estate(where: { id: $id }) {
      ...EstateCommonFields
    }
    apartment: estate(where: { id: $id }) {
      ...EstateApartment
    }
    building: estate(where: { id: $id }) {
      ...EstateBuilding
    }
  }
  ${ESTATE_COMMON_FIELDS}
  ${ESTATE_APARTMENT}
  ${ESTATE_BUILDING}
`;

export const GET_EDIT_FORM_ESTATE = gql`
  query GetEditFormEstate($id: ID!) {
    estate(where: { id: $id }) {
      ...EstateCommonFields
      ...EstateApartment
      ...EstateBuilding
    }
  }
  ${ESTATE_COMMON_FIELDS}
  ${ESTATE_APARTMENT}
  ${ESTATE_BUILDING}
`;

export const GET_ACTUAL_ESTATES = gql`
  query GetActualEstates {
    estates(last: 4) {
      ...EstateCard
    }
  }
  ${ESTATE_CARD}
`;

export const GET_SEARCHED_ESTATES = gql`
  query GetSearchedEstates {
    estates {
      ...EstateCard
    }
  }
  ${ESTATE_CARD}
`;

export const GET_MY_ESTATES = gql`
  query GetUserEstates($issuer: String) {
    estates(where: { customUser: { issuer: $issuer } }) {
      ...EstateCard
    }
  }
  ${ESTATE_CARD}
`;

export const GET_PATHS = gql`
  query GetPaths {
    estates {
      id
    }
  }
`;

export const ADD_ESTATE = gql`
  mutation CreateEstate(
    $images: [AssetWhereUniqueInput!]
    $plan: AssetWhereUniqueInput
    $videoUrl: String
    $description: String
    $address: String
    $location: LocationInput
    $price: Float
    $dealType: String
    $rentType: String
    $estateType: String
    $apartmentType: String
    $agentName: String
    $agentPhone: String
    $agencyServicePrice: Float
    $rooms: String
    $commonSquare: Float
    $livingSquare: Float
    $kitchenSquare: Float
    $floor: Int
    $allFloors: Int
    $balconies: Int
    $loggias: Int
    $roomsType: String
    $windowsType: String
    $state: String
    $plateType: String
    $bathType: String
    $isRemodeled: Boolean
    $isRoomsFurniture: Boolean
    $isKitchenFurniture: Boolean
    $builtYear: Int
    $buildingType: String
    $materialType: String
    $parkingType: String
    $isElevator: Boolean
    $isServiceElevator: Boolean
    $isRestrictedArea: Boolean
    $isBargaining: Boolean
    $isMortgage: Boolean
    $issuer: String
  ) {
    createEstate(
      data: {
        images: { connect: $images }
        plan: { connect: $plan }
        videoUrl: $videoUrl
        description: $description
        address: $address
        location: $location
        price: $price
        dealType: $dealType
        rentType: $rentType
        estateType: $estateType
        apartmentType: $apartmentType
        agentName: $agentName
        agentPhone: $agentPhone
        agencyServicePrice: $agencyServicePrice
        rooms: $rooms
        commonSquare: $commonSquare
        livingSquare: $livingSquare
        kitchenSquare: $kitchenSquare
        floor: $floor
        allFloors: $allFloors
        balconies: $balconies
        loggias: $loggias
        roomsType: $roomsType
        windowsType: $windowsType
        state: $state
        plateType: $plateType
        bathType: $bathType
        isRemodeled: $isRemodeled
        isRoomsFurniture: $isRoomsFurniture
        isKitchenFurniture: $isKitchenFurniture
        builtYear: $builtYear
        buildingType: $buildingType
        materialType: $materialType
        parkingType: $parkingType
        isElevator: $isElevator
        isServiceElevator: $isServiceElevator
        isRestrictedArea: $isRestrictedArea
        isBargaining: $isBargaining
        isMortgage: $isMortgage
        customUser: { connect: { issuer: $issuer } }
      }
    ) {
      id
    }
  }
`;

export const EDIT_ESTATE = gql`
  mutation EditEstate(
    $id: ID!
    $videoUrl: String
    $description: String
    $address: String
    $location: LocationInput
    $price: Float
    $dealType: String
    $rentType: String
    $estateType: String
    $apartmentType: String
    $agentName: String
    $agentPhone: String
    $agencyServicePrice: Float
    $rooms: String
    $commonSquare: Float
    $livingSquare: Float
    $kitchenSquare: Float
    $floor: Int
    $allFloors: Int
    $balconies: Int
    $loggias: Int
    $roomsType: String
    $windowsType: String
    $state: String
    $plateType: String
    $bathType: String
    $isRemodeled: Boolean
    $isRoomsFurniture: Boolean
    $isKitchenFurniture: Boolean
    $builtYear: Int
    $buildingType: String
    $materialType: String
    $parkingType: String
    $isElevator: Boolean
    $isServiceElevator: Boolean
    $isRestrictedArea: Boolean
    $isBargaining: Boolean
    $isMortgage: Boolean
  ) {
    updateEstate(
      where: { id: $id }
      data: {
        videoUrl: $videoUrl
        description: $description
        address: $address
        location: $location
        price: $price
        dealType: $dealType
        rentType: $rentType
        estateType: $estateType
        apartmentType: $apartmentType
        agentName: $agentName
        agentPhone: $agentPhone
        agencyServicePrice: $agencyServicePrice
        rooms: $rooms
        commonSquare: $commonSquare
        livingSquare: $livingSquare
        kitchenSquare: $kitchenSquare
        floor: $floor
        allFloors: $allFloors
        balconies: $balconies
        loggias: $loggias
        roomsType: $roomsType
        windowsType: $windowsType
        state: $state
        plateType: $plateType
        bathType: $bathType
        isRemodeled: $isRemodeled
        isRoomsFurniture: $isRoomsFurniture
        isKitchenFurniture: $isKitchenFurniture
        builtYear: $builtYear
        buildingType: $buildingType
        materialType: $materialType
        parkingType: $parkingType
        isElevator: $isElevator
        isServiceElevator: $isServiceElevator
        isRestrictedArea: $isRestrictedArea
        isBargaining: $isBargaining
        isMortgage: $isMortgage
      }
    ) {
      id
    }
  }
`;
