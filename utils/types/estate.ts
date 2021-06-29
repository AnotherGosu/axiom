export interface CommonFields {
  videoUrl?: string;
  description?: string;
  address?: string;
  location?: { latitude: number; longitude: number };
  price?: number;
  dealType?: string;
  rentType?: string;
  estateType?: string;
  agentName?: string;
  agentPhone?: string;
  agencyServicePrice?: number;
}

export interface Apartment {
  rooms?: string;
  commonSquare?: number;
  livingSquare?: number;
  kitchenSquare?: number;
  floor?: number;
  allFloors?: number;
  balconies?: number;
  loggias?: number;
  roomsType?: string;
  windowsType?: string;
  state?: string;
  plateType?: string;
  bathType?: string;
  isRemodeled?: boolean;
  isRoomsFurniture?: boolean;
  isKitchenFurniture?: boolean;
}

export interface Building {
  builtYear?: number;
  buildingType?: string;
  materialType?: string;
  parkingType?: string;
  isElevator?: boolean;
  isServiceElevator?: boolean;
  isRestrictedArea?: boolean;
}

export interface Tags {
  isBargaining?: boolean;
  isMortgage?: boolean;
}

export type StaticFields = CommonFields & Apartment & Building & Tags;

export interface AddEstateFormData extends StaticFields {
  images?: File[];
  plan?: File;
}

export interface EditEstateFormData extends StaticFields {
  id?: string;
  createdAt?: string;
  images?: File[] | Array<{ id: string; url: string }>;
  plan?: File | { id: string; url: string };
}

export interface CMSEstate extends StaticFields {
  id?: string;
  createdAt?: string;
  images?: Array<{ id: string; url: string }>;
  plan?: { id: string; url: string };
}

export interface Estate extends CMSEstate {
  title?: string;
  preview?: { url: string };
}

export interface UserEstate {
  id?: Estate["id"];
  createdAt?: Estate["createdAt"];
  preview?: Estate["preview"];
  estateType?: Estate["estateType"];
  title: Estate["title"];
  price?: Estate["price"];
  address?: Estate["address"];
}

export interface ActualEstate {
  id?: Estate["id"];
  preview?: Estate["preview"];
  isBargaining?: Estate["isBargaining"];
  isMortgage?: Estate["isMortgage"];
  title?: Estate["title"];
  address?: Estate["address"];
  price?: Estate["price"];
}

export interface SearchedEstate {
  id?: Estate["id"];
  preview?: Estate["preview"];
  isBargaining?: Estate["isBargaining"];
  isMortgage?: Estate["isMortgage"];
  title?: Estate["title"];
  address?: Estate["address"];
  price?: Estate["price"];
  createdAt?: Estate["createdAt"];
  description?: Estate["description"];
  commonSquare?: Estate["commonSquare"];
}
