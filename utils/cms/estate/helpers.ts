import { EstateType, Rooms } from "../../localizations";

export function structureEstate(estate) {
  const { images = [], rooms = "", estateType = "Объект" } = estate;

  const title = getEstateTitle({ rooms, estateType });

  const firstImage = images[0];
  const defaultPreview = "/logo.svg";
  const preview = firstImage ? firstImage.url : defaultPreview;

  return { title, preview, ...estate };
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
      } else {
        return `${Rooms[rooms]}-комнатная квартира`;
      }
    }
    default: {
      return EstateType[estateType];
    }
  }
}
