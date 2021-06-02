import { MenuGroup, Option } from "./types";
import {
  UrbAreas,
  SuburbAreas,
  BathType,
  BuildingType,
  DealType,
  MaterialType,
  ParkingType,
  PlateType,
  RoomsType,
  State,
  WindowsType,
  RentType,
  EstateType,
  ApartmentType,
} from "./localizations";

export const headerNavLinks = [
  { title: "Поиск", href: "/search" },
  { title: "Агентства", href: "/agencies" },
  { title: "Агенты", href: "/agents" },
  { title: "Ипотека", href: "/calculators" },
];

export const roomsOptions: Option[] = [
  ["freePlaning", "Свободная планировка"],
  ["studio", "Студия"],
  ["1", "1"],
  ["2", "2"],
  ["3", "3"],
  ["4", "4"],
  ["5", "5"],
  ["6", "6+"],
];

export const areasGroups: MenuGroup[] = [
  {
    title: "Город",
    options: Object.entries(UrbAreas),
  },
  {
    title: "Пригород",
    options: Object.entries(SuburbAreas),
  },
];

export const materialTypeOptions: Option[] = Object.entries(MaterialType);

export const apartmentTypeOptions: Option[] = Object.entries(ApartmentType);

export const parkingTypeOptions: Option[] = Object.entries(ParkingType);

export const buildingTypeOptions: Option[] = Object.entries(BuildingType);

export const plateTypeOptions: Option[] = Object.entries(PlateType);

export const bathTypeOptions: Option[] = Object.entries(BathType);

export const stateOptions: Option[] = Object.entries(State);

export const roomsTypeOptions: Option[] = Object.entries(RoomsType);

export const dealTypeOptions: Option[] = Object.entries(DealType);

export const windowsTypeOptions: Option[] = Object.entries(WindowsType);

export const rentTypeOptions: Option[] = Object.entries(RentType);

export const estateTypeOptions: Option[] = Object.entries(EstateType);

export const colorTags = {
  isBargaining: {
    title: "Торг",
    color: "blue",
  },
  isMortgage: {
    title: "Возможна ипотека",
    color: "green",
  },
};
