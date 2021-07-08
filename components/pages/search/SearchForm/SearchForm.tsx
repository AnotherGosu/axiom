import { Box, useDisclosure, Collapse } from "@chakra-ui/react";
import Searchbar from "./Searchbar";
import Filters from "./Filters";
import { useForm, FormProvider } from "react-hook-form";
import type { SearchForm as SearchFormData } from "utils/types/forms";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

export default function SearchForm() {
  const { isOpen, onToggle } = useDisclosure();
  const { push, query } = useRouter();

  const form = useForm();
  const { handleSubmit, reset, setValue } = form;

  const onSubmit = async (data: SearchFormData) => {
    const filterQuery = new URLSearchParams();
    const dataEntries = Object.entries(data);
    dataEntries.forEach(([key, value]) => {
      if (value && value?.length !== 0) {
        filterQuery.append(key, value.toString());
      }
    });
    push(`search/?${filterQuery.toString()}`, undefined, { shallow: true });
  };

  // useEffect(() => {
  //   reset();
  //   const queryEntries = Object.entries(query);
  //   queryEntries.forEach((entry) => {
  //     const [key, value] = entry;
  //     if (key.endsWith("From") || key.endsWith("To")) {
  //       // return { ...values, [key]: null(value) };
  //       setValue(key, Number(value));
  //     } else if (key.startsWith("is")) {
  //       // return { ...values, [key]: Boolean(value) };
  //       setValue(key, Boolean(value));
  //     } else {
  //       // return { ...values, [key]: value.toString().split(",") };
  //       setValue(key, value.toString().split(","));
  //     }
  //   }, {});
  // }, [query]);

  return (
    <FormProvider {...form}>
      <Box
        as="form"
        p="20px"
        borderWidth="1px"
        borderRadius="md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Searchbar onToggle={onToggle} />
        <Collapse in={isOpen} animateOpacity>
          <Filters />
        </Collapse>
      </Box>
    </FormProvider>
  );
}

const searchFormDefaultValues = {
  priceFrom: null,
  priceTo: null,
  commonSquareFrom: null,
  commonSquareTo: null,
  livingSquareFrom: null,
  livingSquareTo: null,
  kitchenSquareFrom: null,
  kitchenSquareTo: null,
  floorFrom: null,
  floorTo: null,
  allFloorsFrom: null,
  allFloorsTo: null,
  balconiesFrom: null,
  loggiasFrom: null,
  builtYearFrom: null,
  rooms: [],
  roomsType: [],
  windowsType: [],
  state: [],
  plateType: [],
  bathType: [],
  dealType: [],
  apartmentType: [],
  buildingType: [],
  materialType: [],
  parkingType: [],
  isRemodeled: false,
  isRoomsFurniture: false,
  isKitchenFurniture: false,
  isElevator: false,
  isServiceElevator: false,
  isRestrictedArea: false,
};
