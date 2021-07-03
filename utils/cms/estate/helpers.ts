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
