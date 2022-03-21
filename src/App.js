import React, { useState } from "react";
import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

function App() {
  const center = [51.505, -0.09];
  const icon = new Icon({
    iconUrl: "pin.png",
    iconSize: [25, 25],
  });
  const parkData = {
    features: [
      {
        type: "Feature",
        properties: {
          PARK_ID: 960,
          NAME: "Bearbrook Skateboard Park",
          DESCRIPTIO: "Flat asphalt surface, 5 components",
        },
        geometry: {
          type: "Point",
          coordinates: [-75.3372987731628, 45.383321536272049],
        },
      },
      {
        type: "Feature",
        properties: {
          PARK_ID: 1219,
          NAME: "Bob MacQuarrie Skateboard Park (SK8 Extreme Park)",
          DESCRIPTIO:
            "Flat asphalt surface, 10 components, City run learn to skateboard programs, City run skateboard camps in summer",
        },
        geometry: {
          type: "Point",
          coordinates: [-75.546518086577947, 45.467134581917357],
        },
      },
    ],
  };

  return (
    <div className="App">
      <MapContainer
        center={center}
        zoom={10}
        style={{ width: "100vw", height: "100vh" }}
      >
        {parkData.features.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            position={[
              park.geometry.coordinates[1],
              park.geometry.coordinates[0],
            ]}
            icon={icon}
          />
        ))}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
      <p>
        <a
          href="https://www.flaticon.com/free-icons/location"
          title="location icons"
        >
          Location icons created by Yogi Aprelliyanto - Flaticon
        </a>
      </p>
    </div>
  );
}

export default App;
