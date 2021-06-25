import { Box } from "@chakra-ui/react";
import { YMaps, Map as YMap } from "react-yandex-maps";
import { useRef } from "react";

const modules = ["control.ZoomControl", "geocode", "SuggestView"];

interface Props {
  setAddress?: (...event: any[]) => void;
  setLocation?: (...event: any[]) => void;
}

export default function Map({ setAddress, setLocation }: Props) {
  const ymapsRef = useRef(null);
  const mapRef = useRef(null);

  const onMapDragEnd = async () => {
    const coords = mapRef.current.getCenter();

    const res = await ymapsRef.current.geocode(coords);
    const firstGeoObject = res.geoObjects.get(0);
    const address = firstGeoObject.getAddressLine();

    setAddress(address);
    setLocation({ latitude: coords[0], longitude: coords[1] });
  };

  const onSuggestSelect = async (e) => {
    const { displayName: address } = e.get("item");
    setAddress(address);

    const res = await ymapsRef.current.geocode(address, { results: 1 });
    const firstGeoObject = res.geoObjects.get(0);
    const coords = firstGeoObject.geometry.getCoordinates();
    mapRef.current.setCenter(coords, 17);

    setLocation({ latitude: coords[0], longitude: coords[1] });
  };

  const onLoad = (ymaps) => {
    ymapsRef.current = ymaps;

    mapRef.current.events.add("actionend", onMapDragEnd);

    const suggestView = new ymaps.SuggestView("suggest", {
      boundedBy: [
        [48.581791, 134.762788],
        [48.255808, 135.553533],
      ],
    });
    suggestView.events.add("select", onSuggestSelect);
  };

  return (
    <Box pos="relative" w="100%" h={["xs", "md"]}>
      <YMaps
        query={{
          apikey: process.env.NEXT_PUBLIC_MAP_API_KEY,
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
            mapRef.current = ref;
          }}
          defaultState={{
            center: [48.47, 135.07],
            zoom: 14,
            controls: ["zoomControl"],
          }}
          onLoad={onLoad}
        />
      </YMaps>
      <Box
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -100%)"
        bgImage="url('/placemark.svg')"
        boxSize="50px"
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="contain"
      />
    </Box>
  );
}
