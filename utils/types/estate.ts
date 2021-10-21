export interface Common {
  images: string[];
  plan: string;
  videoUrl: string;
  description: string;
  address: string;
  location: { latitude: number; longitude: number };
  price: number;
  dealType: "free" | "assignment" | "alternative";
  transactionType: "sale" | "longRent" | "shortRent";
  estateType:
    | "apartment"
    | "room"
    | "house"
    | "commercial"
    | "land"
    | "dacha"
    | "garage"
    | "newly";
  agencyServicePrice: number;
}

export interface Apartment {
  rooms: "studio" | "one" | "two" | "three" | "four" | "five" | "six";
  commonSquare: number;
  livingSquare: number;
  kitchenSquare: number;
  floor: number;
  allFloors: number;
  balconies: number;
  roomsType: "passing" | "separated" | "combined";
  windowsType: "street" | "yard" | "sides";
  state: "poor" | "renovated" | "good" | "excellent";
  apartmentStatus: "flat" | "share" | "apartment";
  bathType: "separated" | "combined" | "multiple";
  isRemodeled: boolean;
  isRoomsFurniture: boolean;
  isKitchenFurniture: boolean;
}

export interface Building {
  builtYear: number;
  materialType: "brick" | "monolith" | "panel" | "wood" | "mixed";
  ceilingType: "wood" | "reinforced";
  ceilingHeight: number;
  plateType: "gas" | "electric";
  parkingType: "open" | "closed" | "underground";
  isElevator: boolean;
  isServiceElevator: boolean;
}

export interface Tags {
  isBargaining: boolean;
  isMortgage: boolean;
}

export interface Creator {
  contactName: string;
  contactPhone: string;
}

export interface SystemFields {
  id?: string;
  created_at?: string;
  title?: string;
  creator?: Creator;
}

export type Estate = Common & Apartment & Building & Tags & SystemFields;

export type EstateCard = Pick<
  Estate,
  "id" | "images" | "price" | "address" | "commonSquare" | "title" | "location"
> &
  Tags;
