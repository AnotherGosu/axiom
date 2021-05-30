import { YMaps, Map as YMap, Placemark } from "react-yandex-maps";
import { useRef, useState } from "react";

const modules = [
  "control.ZoomControl",
  "control.FullscreenControl",
  "control.SearchControl",
  "geoObject.addon.balloon",
  "geocode",
];

interface Props {
  setAddress?: (...event: any[]) => void;
  setLocation?: (coords: [number, number]) => void;
}

const Map: React.FC<Props> = ({ setAddress, setLocation }) => {
  const mapRef = useRef(null);
  const [placemarkCoords, setPlacemarkCoords] = useState(null);
  const [placemarkAddress, setPlacemarkAddress] = useState("");

  const getGeoLocation = (e) => {
    const map = mapRef.current;
    const coords = e.get("coords");
    setLocation(coords);
    setPlacemarkCoords(coords);

    map.geocode(coords).then((res) => {
      const firstGeoObject = res.geoObjects.get(0);
      const address = firstGeoObject.getAddressLine();

      setAddress(address);
      setPlacemarkAddress(address);
    });
  };

  return (
    <YMaps
      query={{
        apikey: process.env.NEXT_PUBLIC_MAP_API_KEY,
        ns: "use-load-options",
        load: modules.join(","),
      }}
    >
      <YMap
        style={{ width: "100%", height: "450px", maxWidth: "800px" }}
        instanceRef={(ref) => {
          // @ts-expect-error
          ref?.behaviors.disable("scrollZoom");
        }}
        defaultState={{
          center: [48.47, 135.07],
          zoom: 14,
          controls: ["zoomControl", "fullscreenControl", "searchControl"],
        }}
        onClick={getGeoLocation}
        onLoad={(ymaps) => {
          mapRef.current = ymaps;
        }}
      >
        {placemarkCoords && (
          <Placemark
            geometry={placemarkCoords}
            properties={{
              iconCaption: placemarkAddress,
              balloonContent: placemarkAddress,
            }}
            options={{
              iconColor: "#805AD5",
            }}
          />
        )}
      </YMap>
    </YMaps>
  );
};

export default Map;
