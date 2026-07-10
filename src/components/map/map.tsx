import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '@/hooks/use-map';
import { OfferPreview } from '@/types/offer';

const defaultCustomIcon = leaflet.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const activeCustomIcon = leaflet.icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

type MapProps = {
  offers: OfferPreview[];
  activeOfferId?: string | null;
  className: string;
};

function Map({ offers, activeOfferId, className }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const cityLocation = offers[0].city.location;

  const map = useMap(
    mapRef,
    cityLocation
  );

  useEffect(() => {

    if (map) {
      map.setView(
        [
          cityLocation.latitude,
          cityLocation.longitude,
        ],
        cityLocation.zoom
      );
    }
  }, [map, cityLocation]);

  useEffect(() => {
    if (map) {
      const markerLayer = leaflet.layerGroup().addTo(map);

      offers.forEach((offer) => {
        leaflet
          .marker(
            [
              offer.location.latitude,
              offer.location.longitude,
            ],
            {
              icon:
                offer.id === activeOfferId
                  ? activeCustomIcon
                  : defaultCustomIcon,
            }
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeOfferId]);

  return (
    <section
      className={className}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
