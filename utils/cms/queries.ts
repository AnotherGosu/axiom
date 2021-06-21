import { gql } from "graphql-request";

const ESTATE_FIELDS = gql`
  fragment EstateFields on Estate {
    id
    createdAt
    images {
      url
    }
    plan {
      id
    }
    videoUrl
    description
    address
    location {
      latitude
      longitude
    }
    price
    dealType
    rentType
    estateType
    apartmentType
    agentName
    agentPhone
    agencyServicePrice
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
    builtYear
    buildingType
    materialType
    parkingType
    isElevator
    isServiceElevator
    isRestrictedArea
    isBargaining
    isMortgage
  }
`;

export const GET_ACTUAL_ESTATES = gql`
  query GetActualEstates {
    estates {
      id
      images(first: 1) {
        url
      }
      rooms
      estateType
      address
      price
      isBargaining
      isMortgage
    }
  }
`;

export const GET_SEARCHED_ESTATES = gql`
  query GetSearchedEstates {
    estates {
      id
      images(first: 1) {
        url
      }
      estateType
      rooms
      price
      address
      description
      createdAt
      commonSquare
      isBargaining
      isMortgage
    }
  }
`;

export const GET_ESTATE = gql`
  query GetEstate($id: ID!) {
    estate(where: { id: $id }) {
      ...EstateFields
    }
  }
  ${ESTATE_FIELDS}
`;

export const GET_PATHS = gql`
  query GetPaths {
    estates {
      id
    }
  }
`;

export const CREATE_ESTATE = gql`
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

export const CREATE_USER = gql`
  mutation CreateUser(
    $name: String
    $email: String!
    $phone: String
    $issuer: String!
  ) {
    createCustomUser(
      data: { name: $name, email: $email, phone: $phone, issuer: $issuer }
    ) {
      id
    }
  }
`;

export const GET_USER_BY_EMAIL = gql`
  query GetUserByEmail($email: String) {
    customUser(where: { email: $email }) {
      email
    }
  }
`;

export const GET_USER_PROFILE = gql`
  query GetUserByIssuer($issuer: String) {
    customUser(where: { issuer: $issuer }) {
      name
      email
      phone
    }
  }
`;

export const GET_USER_CONTACTS = gql`
  query GetUserContacts($issuer: String) {
    customUser(where: { issuer: $issuer }) {
      name
      phone
    }
  }
`;

export const GET_USER_ESTATES = gql`
  query GetUserEstates($issuer: String) {
    estates(where: { customUser: { issuer: $issuer } }) {
      id
      images(first: 1) {
        url
      }
      createdAt
      rooms
      estateType
      price
      address
    }
  }
`;
