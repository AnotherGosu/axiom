import { Estate } from "./estate";

export interface AddEstateForm
  extends Omit<Estate, "images" | "plan" | "id" | "createdAt"> {
  images?: File[];
  plan?: File;
}

export interface EditEstateForm extends Omit<Estate, "images" | "plan"> {
  images?: File[] | Array<{ id: string; url: string }>;
  plan?: File | { id: string; url: string };
}

export interface SearchForm {
  priceFrom: number | string;
  priceTo: number | string;
  commonSquareFrom: number | string;
  commonSquareTo: number | string;
  floorFrom: number | string;
  floorTo: number | string;
  livingSquareFrom: number | string;
  kitchenSquareFrom: number | string;
  allFloorsFrom: number | string;
  builtYearFrom: number | string;
  ceilingHeightFrom: number | string;
  rooms: string[];
  roomsType: string[];
  windowsType: string[];
  state: string[];
  plateType: string[];
  bathType: string[];
  dealType: string[];
  apartmentStatus: string[];
  materialType: string[];
  ceilingType: string[];
  parkingType: string[];
  isRemodeled: boolean;
  isRoomsFurniture: boolean;
  isKitchenFurniture: boolean;
  isElevator: boolean;
  isServiceElevator: boolean;
  isBalcony: boolean;
}
