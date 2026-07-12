import { RefObject, useEffect, useState } from 'react';
import leaflet from 'leaflet';

type CityLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

function useMap(
  mapRef: RefObject<HTMLElement>,
  cityLocation: CityLocation
): leaflet.Map | null {
  const [map, setMap] = useState<leaflet.Map | null>(null);

  useEffect(() => {
    if (mapRef.current === null) {
      return;
    }

    const mapInstance = leaflet.map(mapRef.current);

    mapInstance.setView(
      [
        cityLocation.latitude,
        cityLocation.longitude,
      ],
      cityLocation.zoom
    );

    leaflet
      .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
      .addTo(mapInstance);

    setMap(mapInstance);

    return () => {
      mapInstance.remove();
    };
  }, [
    mapRef,
    cityLocation.latitude,
    cityLocation.longitude,
    cityLocation.zoom,
  ]);

  return map;
}

export default useMap;
