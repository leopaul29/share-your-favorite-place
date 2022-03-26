import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useQuery } from "@apollo/client";
import { getInterestPointsQuery } from "../queries/index";
import "./Map.css";

const Map = () => {
  const center = [0, 0];
  const icon = new Icon({
    iconUrl: "pin.png",
    iconSize: [25, 25],
  });

  const { error, loading, data } = useQuery(getInterestPointsQuery);

  return (
    <div className="map">
      <MapContainer
        center={center}
        zoom={3}
        style={{ width: "80vw", height: "100vh" }}
      >
        {!loading &&
          !error &&
          data.InterestPoints.map((point) => (
            <Marker
              key={point.id}
              position={[point.longitude, point.latitude]}
              icon={icon}
            />
          ))}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default Map;
