import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { insertInterestPointMutation } from "../../queries";
import "./addPoint.css";

export default function CreateInterestPoint({ position }) {
  const [insertInterestPoint] = useMutation(insertInterestPointMutation);
  const [loading, setLoading] = useState(false);
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);
      await insertInterestPoint({
        variables: { longitude, latitude },
      });
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (position) {
      setLongitude(position.lat);
      setLatitude(position.lng);
    }
  }, [position]);

  if (loading) return <p className="load">Loading ...</p>;

  return (
    <div className="addPoint">
      <form onSubmit={handleSubmit} align="center">
        <input
          type="text"
          value={longitude}
          placeholder="Longitude"
          onChange={(e) => setLongitude(e.target.value)}
          required
        />
        <input
          type="text"
          value={latitude}
          placeholder="Latitude"
          onChange={(e) => setLatitude(e.target.value)}
          required
        />
        <br />
        <div className="action">
          <input
            type="submit"
            value="Add new point"
            className="addbutton button"
          />
        </div>
      </form>
    </div>
  );
}
