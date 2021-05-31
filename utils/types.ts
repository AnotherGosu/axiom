export type Estate = SystemFields &
  CommonFields & {
    title: string;
    tags: Tags;
    apartment: Apartment;
    building: Building;
  };

export interface SystemFields {
  id: string;
  createdAt: string;
}

export interface CommonFields {
  images: Array<{ url: string }>;
  description: string;
  address: string;
  location: { latitude: number; longitude: number };
  price: number;
  dealType: string;
  rentType: string;
  estateType: string;
  agentName: string;
  agentPhone: string;
  agencyServicePrice: number;
}

export interface Apartment {
  rooms: number;
  commonSquare: number;
  livingSquare: number;
  kitchenSquare: number;
  floor: number;
  allFloors: number;
  balconies: number;
  loggias: number;
  roomsType: string;
  windowsType: string;
  state: string;
  plateType: string;
  bathType: string;
  isRemodeled: boolean;
  isRoomsFurniture: boolean;
  isKitchenFurniture: boolean;
}

export interface Building {
  builtYear: number;
  buildingType: string;
  materialType: string;
  parkingType: string;
  isElevator: boolean;
  isServiceElevator: boolean;
  isRestrictedArea: boolean;
}

export interface Tags {
  isBargaining: boolean;
  isMortgage: boolean;
  isReward: boolean;
}

export type RawEstate = CommonFields &
  SystemFields &
  Building &
  Apartment &
  Tags;

export type CreateEstateFormFields = CommonFields & Building & Apartment & Tags;

export interface MenuGroup {
  title: string;
  options: Option[];
}

export type Option = [string, string];
