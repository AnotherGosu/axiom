import type { Estate } from "./estate";
import type { Media } from "./common";

export interface AddEstateForm extends Omit<Estate, "images" | "plan"> {
  images: File[];
  plan: File;
}

export interface EditEstateForm extends AddEstateForm {
  userId: string;
  orderedImages: string[];
  mediaList: Media[];
  planUrl?: string;
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
