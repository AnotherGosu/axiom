import { useEffect } from "react";
import { useRouter } from "next/router";
import { UseFormReset } from "react-hook-form";
import type { SearchForm } from "utils/types/forms";

export const defaultValues: SearchForm = {
  priceFrom: "",
  priceTo: "",
  commonSquareFrom: "",
  commonSquareTo: "",
  floorFrom: "",
  floorTo: "",
  livingSquareFrom: "",
  kitchenSquareFrom: "",
  allFloorsFrom: "",
  builtYearFrom: "",
  ceilingHeightFrom: "",
  rooms: [],
  roomsType: [],
  windowsType: [],
  state: [],
  plateType: [],
  bathType: [],
  dealType: [],
  apartmentStatus: [],
  materialType: [],
  ceilingType: [],
  parkingType: [],
  isBalcony: false,
  isRemodeled: false,
  isRoomsFurniture: false,
  isKitchenFurniture: false,
  isElevator: false,
  isServiceElevator: false,
};

export function useQueryValues(reset: UseFormReset<any>) {
  const { query } = useRouter();

  useEffect(() => {
    const queryValues = Object.entries(query).reduce((values, field) => {
      const [key, value] = field;
      //handle number inputs
      if (key.endsWith("From") || key.endsWith("To")) {
        return { ...values, [key]: Number(value) };
      }
      //handle switches
      else if (key.startsWith("is")) {
        return { ...values, [key]: true };
      }
      //handle checkboxMenus
      else {
        return { ...values, [key]: value.toString().split(",") };
      }
    }, defaultValues);
    reset(queryValues);
  }, [query, reset]);
}
