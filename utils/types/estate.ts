export interface CommonFields {
  videoUrl?: string;
  description?: string;
  address?: string;
  location?: { latitude: number; longitude: number };
  price?: number;
  dealType?: string;
  rentType?: string;
  estateType?: string;
  apartmentType?: string;
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

export interface CMSEstate extends StaticFields {
  id?: string;
  createdAt?: string;
  images?: Array<{ id: string; url: string }>;
  plan?: { id: string; url: string };
}

export interface Estate extends CommonFields, Tags {
  id?: string;
  createdAt?: string;
  images?: Array<{ id: string; url: string }>;
  plan?: { id: string; url: string };
  title?: string;
  apartment?: Apartment;
  building?: Building;
}

export interface EstateCard extends Tags {
  id?: string;
  createdAt?: string;
  images?: Array<{ id: string; url: string }>;
  title?: string;
  estateType?: string;
  price?: number;
  address?: string;
  rooms?: number;
  commonSquare?: number;
}
