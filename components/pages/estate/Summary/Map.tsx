import { Box } from "@chakra-ui/react";
import { YMaps, Map as YMap, Placemark } from "react-yandex-maps";
import type { Estate } from "utils/types/estate";

const modules = ["control.ZoomControl", "control.FullscreenControl"];

interface Props {
  location: Estate["location"];
}

export default function Map({ location }: Props) {
  return (
    <Box w="100%" height={["200px", "400px"]}>
      <YMaps
        query={{
          ns: "use-load-options",
          load: modules.join(","),
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
  );
}
