import { Box, Skeleton } from "@chakra-ui/react";
import { YMaps, Map as YMap, Placemark } from "react-yandex-maps";
import type { StructuredEstate } from "utils/types/estate";
import { useState } from "react";

interface Props {
  location: StructuredEstate["location"];
}

export default function Map({ location }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Skeleton isLoaded={isLoaded}>
      <Box w="100%" height={["200px", "400px"]}>
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
              center: [location.latitude, location.longitude],
              zoom: 17,
              controls: ["zoomControl", "fullscreenControl"],
            }}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
            onLoad={() => setIsLoaded(true)}
          >
            <Placemark
              defaultGeometry={[location.latitude, location.longitude]}
              defaultOptions={{
                iconLayout: "default#image",
                iconImageHref: "/placemark.svg",
                iconImageSize: [50, 80],
                iconImageOffset: [-25, -60],
              }}
            />
          </YMap>
        </YMaps>
      </Box>
    </Skeleton>
  );
}
