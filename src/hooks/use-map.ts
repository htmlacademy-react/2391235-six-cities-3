import { useEffect, useRef, RefObject } from 'react';
import leaflet from 'leaflet';

function useMap(
  mapRef: RefObject<HTMLElement>,
  city: {
    latitude: number;
    longitude: number;
    zoom: number;
  }
) {
  const mapInstanceRef = useRef<leaflet.Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && mapInstanceRef.current === null) {
      const map = leaflet.map(mapRef.current);

      map.setView(
        [
          city.latitude,
          city.longitude,
        ],
        city.zoom
      );

      leaflet
        .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
        .addTo(map);

      mapInstanceRef.current = map;
    }
  }, [mapRef, city]);

  return mapInstanceRef.current;
}

export default useMap;
