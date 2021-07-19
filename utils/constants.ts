import { Option } from "./types/common";
import {
  Rooms,
  BathType,
  DealType,
  MaterialType,
  ParkingType,
  PlateType,
  CeilingType,
  RoomsType,
  State,
  WindowsType,
  RentType,
  EstateType,
  ApartmentStatus,
} from "./localizations";

export const roomsOptions: Option[] = Object.entries(Rooms);

export const materialTypeOptions: Option[] = Object.entries(MaterialType);

export const apartmentStatusOptions: Option[] = Object.entries(ApartmentStatus);

export const parkingTypeOptions: Option[] = Object.entries(ParkingType);

export const plateTypeOptions: Option[] = Object.entries(PlateType);

export const ceilingTypeOptions: Option[] = Object.entries(CeilingType);

export const bathTypeOptions: Option[] = Object.entries(BathType);

export const stateOptions: Option[] = Object.entries(State);

export const roomsTypeOptions: Option[] = Object.entries(RoomsType);

export const dealTypeOptions: Option[] = Object.entries(DealType);

export const windowsTypeOptions: Option[] = Object.entries(WindowsType);

export const rentTypeOptions: Option[] = Object.entries(RentType);

export const estateTypeOptions: Option[] = Object.entries(EstateType);
