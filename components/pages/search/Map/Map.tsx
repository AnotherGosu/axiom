import { Box } from "@chakra-ui/react";
import { YMaps, Map as YMap, Placemark, ZoomControl } from "react-yandex-maps";
import type { EstateCard as EstateCardProps } from "utils/types/estate";
import EstateCard from "components/common/EstateCard";
import { useState, useRef } from "react";

interface Props {
  estates: EstateCardProps[];
}

export default function Map({ estates }: Props) {
  const [activeEstate, setActiveEstate] = useState<EstateCardProps>(null);

  const onPlacemarkClick = (estate: EstateCardProps) => {
    estate.id === activeEstate?.id
      ? setActiveEstate(null)
      : setActiveEstate(estate);
  };

  const mapRef = useRef(null);

  return (
    <Box w="100%" height="800px" pos="relative" overflow="hidden">
      <Box pos="absolute" top={2} left={2} zIndex={2}>
        {activeEstate && <EstateCard {...activeEstate} />}
      </Box>
      <YMaps
        query={{
          apikey: process.env.NEXT_PUBLIC_MAP_API_KEY,
          ns: "use-load-options",
        }}
      >
        <YMap
          style={{
            width: "100%",
            height: "100%",
          }}
          instanceRef={(ref) => {
            // @ts-expect-error
            ref?.behaviors.disable("scrollZoom");
            mapRef.current = ref;
          }}
          defaultState={{
            center: [48.47, 135.07],
            zoom: 14,
          }}
          modules={["geoObject.addon.hint"]}
        >
          <ZoomControl
            defaultOptions={{ position: { left: 10, bottom: 50 } }}
          />
          {estates.map((estate) => {
            const { id, location, address, price } = estate;
            const formatedPrice = new Intl.NumberFormat("ru-RU").format(price);
            return (
              <Placemark
                key={id}
                defaultGeometry={[location.latitude, location.longitude]}
                defaultOptions={{
                  preset: "islands#violetStretchyIcon",
                }}
                defaultProperties={{
                  iconContent: `${formatedPrice} ₽`,
                  hintContent: address,
                }}
                onClick={() => onPlacemarkClick(estate)}
              />
            );
          })}
        </YMap>
      </YMaps>
    </Box>
  );
}
