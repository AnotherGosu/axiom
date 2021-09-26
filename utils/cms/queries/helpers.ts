import { EstateType, Rooms } from "utils/localizations";
import type { Estate, StructuredEstate, EstateCard } from "utils/types/estate";

export function structureEstate(estate): StructuredEstate {
  const {
    common: { images, estateType },
    apartment: { rooms },
  } = estate;

  return {
    ...estate,
    common: {
      ...estate.common,
      title: getEstateTitle({ rooms, estateType }),
      images: setDefaultImage(images),
    },
  };
}

export function structureEstateCard(estate): EstateCard {
  const { images, estateType, rooms } = estate;

  return {
    ...estate,
    images: setDefaultImage(images),
    title: getEstateTitle({ estateType, rooms }),
  };
}

function setDefaultImage(images: any[]) {
  if (!images.length) {
    return [{ id: "defaultLogoImage", url: "/logo.svg" }, ...images];
  } else {
    return images;
  }
}

function getEstateTitle({
  rooms,
  estateType,
}: {
  rooms: string;
  estateType: string;
}) {
  switch (estateType) {
    case "apartment": {
      if (rooms === "studio") {
        return Rooms["studio"];
      } else if (rooms === "six") {
        return "6-комнатная квартира";
      } else {
        return `${Rooms[rooms]}-комнатная квартира`;
      }
    }
    default: {
      return EstateType[estateType];
    }
  }
}

export function createFilters(filterQuery: {
  [key: string]: string | string[];
}) {
  //if query is empty prevent filtering
  if (
    Object.keys(filterQuery).length === 0 &&
    filterQuery.constructor === Object
  ) {
    return {};
  }

  const filterQueryEntries = Object.entries(filterQuery);

  const filters = filterQueryEntries.reduce((filters, entry) => {
    const [key, value] = entry;
    //handle number input (left border)
    if (key.endsWith("From")) {
      const filterName = key.replace("From", "_gte");
      return { ...filters, [filterName]: Number(value) };
    }
    //handle number input (right border)
    else if (key.endsWith("To")) {
      const filterName = key.replace("To", "_lte");
      return { ...filters, [filterName]: Number(value) };
    }
    //handle switch
    else if (key.startsWith("is")) {
      //balconies / loggias exception
      if (key === "isBalcony") {
        return { ...filters, balconies_not: null };
      } else {
        return { ...filters, [key]: Boolean(value) };
      }
    }
    //handle checboxMenu
    else if (key.endsWith("In")) {
      const filterName = key.replace("In", "_in");
      //ceilingType exception
      if (key === "ceilingTypeIn") {
        const selectedValues = value.toString().split(",");
        return { ...filters, [filterName]: [...selectedValues, ""] };
      } else {
        return { ...filters, [filterName]: value.toString().split(",") };
      }
    }
    //handle select
    else {
      return { ...filters, [key]: value };
    }
  }, {});

  return filters;
}
