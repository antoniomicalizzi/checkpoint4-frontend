import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';

import './MapPage.css';

function MapPage() {
  const [points, setPoints] = useState([]);

  useEffect(async () => {
    await axios
      .get(
        'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=818979973_structures-re-emploi-loire-atlantique&q=&facet=ville'
      )
      .then((response) => {
        setPoints(response.data.records);
      });
  }, []);
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
        {points.map((response) => {
          const { coordinates } = response.data.records[0].fields.location;
          // console.log(coordinates);
          return (
            <Marker position={coordinates}>
              <Popup>{response.data.records.fields.nom_complet}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default MapPage;
