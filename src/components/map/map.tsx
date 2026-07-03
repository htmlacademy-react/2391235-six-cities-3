import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { OfferPreview } from '@/types/offer';

type MapProps = {
  offers: OfferPreview[];
};

function Map({ offers }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<leaflet.Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && mapInstanceRef.current === null) {
      const map = leaflet.map(mapRef.current);

      map.setView(
        [
          offers[0].city.location.latitude,
          offers[0].city.location.longitude,
        ],
        offers[0].city.location.zoom
      );

      leaflet
        .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
        .addTo(map);

      mapInstanceRef.current = map;

      offers.forEach((offer) => {
        leaflet
          .marker([
            offer.location.latitude,
            offer.location.longitude,
          ])
          .addTo(map);
      });
    }
  }, [offers]);

  return (
    <section
      className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
