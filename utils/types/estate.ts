export interface CommonFields {
  id?: string;
  createdAt?: string;
  images?: Array<{ id: string; url: string }>;
  plan?: { id: string; url: string };
  videoUrl?: string;
  description?: string;
  address?: string;
  location?: { latitude: number; longitude: number };
  price?: number;
  dealType?: string;
  rentType?: string;
  estateType?: string;
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
  apartmentStatus?: string;
  bathType?: string;
  isRemodeled?: boolean;
  isRoomsFurniture?: boolean;
  isKitchenFurniture?: boolean;
}

export interface Building {
  builtYear?: number;
  buildingType?: string;
  materialType?: string;
  ceilingType?: string;
  ceilingHeight?: number;
  plateType?: string;
  parkingType?: string;
  isElevator?: boolean;
  isServiceElevator?: boolean;
}

export interface Tags {
  isBargaining?: boolean;
  isMortgage?: boolean;
}

export type Estate = CommonFields & Apartment & Building & Tags;

export interface StructuredEstate extends CommonFields, Tags {
  title?: string;
  apartment?: Apartment;
  building?: Building;
}

export interface EstateCard
  extends Pick<
    Estate,
    | "id"
    | "createdAt"
    | "images"
    | "location"
    | "estateType"
    | "price"
    | "address"
    | "rooms"
    | "commonSquare"
    | "isBargaining"
    | "isMortgage"
  > {
  title?: string;
}
