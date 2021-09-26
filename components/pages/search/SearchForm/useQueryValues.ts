import { useEffect } from "react";
import { useRouter } from "next/router";
import { UseFormReset } from "react-hook-form";
import type { SearchForm } from "utils/types/forms";

export const defaultValues = {
  estateType: null,
  transactionType: null,
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
  roomsIn: [],
  roomsTypeIn: [],
  windowsTypeIn: [],
  stateIn: [],
  plateTypeIn: [],
  bathTypeIn: [],
  dealTypeIn: [],
  apartmentStatusIn: [],
  materialTypeIn: [],
  ceilingTypeIn: [],
  parkingTypeIn: [],
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
    //update form values based on query values
    const queryValues = Object.entries(query).reduce((values, field) => {
      const [key, value] = field;
      //handle number input
      if (key.endsWith("From") || key.endsWith("To")) {
        return { ...values, [key]: Number(value) };
      }
      //handle switch
      else if (key.startsWith("is")) {
        return { ...values, [key]: true };
      }
      //handle checkboxMenu
      else if (key.endsWith("In")) {
        return { ...values, [key]: value.toString().split(",") };
      }
      //handle select
      else {
        return { ...values, [key]: value };
      }
    }, defaultValues);
    reset(queryValues);
  }, [query, reset]);
}
