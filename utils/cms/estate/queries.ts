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
  mutation CreateEstate($data: EstateCreateInput!) {
    createEstate(data: $data) {
      id
    }
  }
`;

export const EDIT_ESTATE = gql`
  mutation EditEstate($estateId: ID!, $data: EstateUpdateInput!) {
    updateEstate(where: { id: $estateId }, data: $data) {
      id
    }
  }
`;

export const DELETE_ESTATE = gql`
  mutation DeleteEstate($estateId: ID!) {
    deleteEstate(where: { id: $estateId }) {
      id
    }
  }
`;
