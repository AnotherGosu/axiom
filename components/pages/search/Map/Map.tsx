import { Box } from "@chakra-ui/react";
import { YMaps, Map as YMap, Placemark } from "react-yandex-maps";
import type { EstateCard } from "utils/types/estate";

interface Props {
  estates: EstateCard[];
}

export default function Map({ estates }: Props) {
  return (
    <Box w="100%" height="600px">
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
          }}
          defaultState={{
            center: [48.47, 135.07],
            zoom: 14,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          {estates.map(({ location }) => (
            <Placemark
              key={`${location.latitude} ${location.longitude}`}
              defaultGeometry={[location.latitude, location.longitude]}
              defaultOptions={{
                iconLayout: "default#image",
                iconImageHref: "/placemark.svg",
                iconImageSize: [50, 80],
                iconImageOffset: [-25, -60],
              }}
            />
          ))}
        </YMap>
      </YMaps>
    </Box>
  );
}
