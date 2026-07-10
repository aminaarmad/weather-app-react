import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";

function ChangeMapView({ lat, lon }) {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lon], 10);
  }, [lat, lon, map]);

  return null;
}

function WeatherMap({ lat, lon, city, country}) {
  return (
    <div className="weather-map">

       <div className="map-header">
          <FaLocationDot />
          <span>{city}, {country}</span>
         </div>

      <MapContainer
        center={[lat, lon]}
        zoom={10}
        className="leaflet-map"
      >
        <ChangeMapView lat={lat} lon={lon} />
        
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[lat, lon]}>
          <Popup>{city}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default WeatherMap;