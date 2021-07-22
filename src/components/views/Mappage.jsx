import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './MapPage.css';

function MapPage() {
  return (
    <div className="map-container">
      <MapContainer
        center={[47.216671, -1.55]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[47.216671, -1.55]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapPage;
