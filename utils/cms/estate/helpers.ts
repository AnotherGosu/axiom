import { EstateType, Rooms } from "utils/localizations";
import type { Estate, StructuredEstate } from "utils/types/estate";

export function structureEstate(estate: Estate): StructuredEstate {
  const { images, rooms, estateType } = estate;

  const title = getEstateTitle({ rooms, estateType });

  if (!images.length) images.push({ id: "defaultLogoImage", url: "/logo.svg" });

  return { ...estate, title };
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
        return { ...filters, OR: [{ balconies_gte: 1 }, { loggias_gte: 1 }] };
      } else {
        return { ...filters, [key]: Boolean(value) };
      }
    }
    //handle checboxmenu
    else {
      //ceilingType exception
      if (key === "ceilingType") {
        const filterName = `${key}_in`;
        const selectedValues = value.toString().split(",");
        return { ...filters, [filterName]: [...selectedValues, ""] };
      } else {
        const filterName = `${key}_in`;
        return { ...filters, [filterName]: value.toString().split(",") };
      }
    }
  }, {});

  return filters;
}
