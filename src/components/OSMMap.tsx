'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

interface OSMMapProps {
  lat?: number;
  lon?: number;
  zoom?: number;
  height?: string;
}

export default function OSMMap({
  lat = 51.2840,
  lon = 6.5490,
  zoom = 15,
  height = '240px',
}: OSMMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let map: import('leaflet').Map;

    const init = async () => {
      const L = (await import('leaflet')).default;

      // Fix broken default icon paths in webpack/Next.js
      const icon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      map = L.map(containerRef.current!).setView([lat, lon], zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      L.marker([lat, lon], { icon })
        .addTo(map)
        .bindPopup(
          '<b>ABZ-Zaunsysteme GmbH</b><br>Virmondstrasse 137<br>47877 Willich-Neersen'
        )
        .openPopup();
    };

    init();

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (map as any)?.remove();
    };
  }, [lat, lon, zoom]);

  return (
    <div
      ref={containerRef}
      style={{ height, width: '100%' }}
      className="z-0"
    />
  );
}
