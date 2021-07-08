import { EstateType, Rooms } from "../../localizations";

export function structureEstate(estate) {
  const { images, rooms, estateType } = estate;

  const title = getEstateTitle({ rooms, estateType });

  if (!images.length) images.push({ url: "/logo.svg" });

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
      if (rooms === "freePlaning") {
        return Rooms["freePlaning"];
      } else if (rooms === "studio") {
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
    if (key.endsWith("From")) {
      const filterName = key.replace("From", "_gte");
      return { ...filters, [filterName]: Number(value) };
    } else if (key.endsWith("To")) {
      const filterName = key.replace("To", "_lte");
      return { ...filters, [filterName]: Number(value) };
    } else if (key.startsWith("is")) {
      return { ...filters, [key]: Boolean(value) };
    } else {
      const filterName = `${key}_in`;
      return { ...filters, [filterName]: value.toString().split(",") };
    }
  }, {});

  return filters;
}
