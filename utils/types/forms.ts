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
  estateType: string;
  rentType: string;
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
  roomsIn: string[];
  roomsTypeIn: string[];
  windowsTypeIn: string[];
  stateIn: string[];
  plateTypeIn: string[];
  bathTypeIn: string[];
  dealTypeIn: string[];
  apartmentStatusIn: string[];
  materialTypeIn: string[];
  ceilingTypeIn: string[];
  parkingTypeIn: string[];
  isRemodeled: boolean;
  isRoomsFurniture: boolean;
  isKitchenFurniture: boolean;
  isElevator: boolean;
  isServiceElevator: boolean;
  isBalcony: boolean;
}
