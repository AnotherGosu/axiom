import type { Estate } from "./estate";
import type { customUserProfile } from "./customUser";
import type { File as FormidableFile } from "formidable";

export interface AddEstateFormClient
  extends Omit<Estate, "images" | "plan" | "id" | "createdAt"> {
  images: File[];
  plan: File;
}
export interface AddEstateFormServer
  extends Omit<AddEstateFormClient, "images" | "plan"> {
  images: FormidableFile[];
  plan: FormidableFile;
}

export interface EditEstateFormClient
  extends Omit<Estate, "images" | "plan" | "createdAt"> {
  images: File[] | Array<{ id: string; url: string }>;
  plan: File | { id: string; url: string };
  existingImages: Array<{ id: string; url: string }>;
  existingPlan: { id: string; url: string };
}
export interface EditEstateFormServer
  extends Omit<EditEstateFormClient, "images" | "plan"> {
  images: FormidableFile[];
  plan: FormidableFile;
  orderedImages: Array<{ id?: string; name?: string }>;
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

export type customUserProfileClient = customUserProfile;
export interface customUserProfileServer extends customUserProfileClient {
  sub: string;
}
