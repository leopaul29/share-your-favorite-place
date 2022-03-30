import React from "react";
import { useQuery } from "@apollo/client";
import { getInterestPointsQuery } from "../../queries/index";
import "./getPoints.css";
import { BsArrowRightCircle } from "react-icons/bs";

export default function GetInterestPoints({ map }) {
  const { error, loading, data } = useQuery(getInterestPointsQuery);
  if (loading) {
    return <p className="load">Loading...</p>;
  }
  if (error) {
    console.log("An error occured", error);
  }

  function flyToPoint(position) {
    if (map && position) {
      map.flyTo(position, 5);
    }
  }

  return (
    <div className="getPoints sc2">
      <h3>All interest points</h3>
      <div className="points">
        {data &&
          data.InterestPoints.map((point) => (
            <div
              key={point.id}
              className="point"
              onClick={() => flyToPoint([point.longitude, point.latitude])}
            >
              <div className="point_position">
                {point.longitude.toFixed(5)};{point.latitude.toFixed(5)}
              </div>
              <BsArrowRightCircle className="point_goAction target button" />
            </div>
          ))}
      </div>
    </div>
  );
}
