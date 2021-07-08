import { StaticFields } from "./estate";

export interface AddEstateForm extends StaticFields {
  images?: File[];
  plan?: File;
}

export interface EditEstateForm extends StaticFields {
  id?: string;
  createdAt?: string;
  images?: File[] | Array<{ id: string; url: string }>;
  plan?: File | { id: string; url: string };
}

export interface SignUpForm {
  lastName: string;
  name: string;
  patronim: string;
  email: string;
  phone: string;
}

export interface SearchForm {
  priceFrom: number;
  priceTo: number;
  commonSquareFrom: number;
  commonSquareTo: number;
  livingSquareFrom: number;
  livingSquareTo: number;
  kitchenSquareFrom: number;
  kitchenSquareTo: number;
  floorFrom: number;
  floorTo: number;
  allFloorsFrom: number;
  allFloorsTo: number;
  balconiesFrom: number;
  loggiasFrom: number;
  builtYearFrom: number;
  rooms: string[];
  roomsType: string[];
  windowsType: string[];
  state: string[];
  plateType: string[];
  bathType: string[];
  dealType: string[];
  status: string[];
  buildingType: string[];
  materialType: string[];
  parkingType: string[];
  isRemodeled: boolean;
  isRoomsFurniture: boolean;
  isKitchenFurniture: boolean;
  isElevator: boolean;
  isServiceElevator: boolean;
}
