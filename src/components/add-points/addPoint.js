import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { insertInterestPointMutation } from "../../queries";
import "./addPoint.css";
// import toast from "toasted-notes";
// import "toasted-notes/src/styles.css";

export default function CreateInterestPoint() {
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
      //   if (true) toast.notify("Successful");
    } catch (error) {
      setLoading(false);
      //   if (error) toast.notify("Something went wrong. Please try again later.");
    }
  };

  if (loading) return <p className="load">Loading ...</p>;

  return (
    <>
      <p className="title">
        A Simple Notes todo app created with
        <br /> ReactJs, Hasura, Graphql and Postgres
      </p>
      <div className="container">
        <p className="little-title">Add a Longitude </p>
        <form onSubmit={handleSubmit} align="center">
          <input
            type="text"
            value={longitude}
            placeholder="Add a longitude"
            onChange={(e) => setLongitude(e.target.value)}
            required
          />
          <input
            type="text"
            value={latitude}
            placeholder="Add a latitude"
            onChange={(e) => setLatitude(e.target.value)}
            required
          />
          <br />
          <input type="submit" value="create" className="button" />
        </form>
      </div>
    </>
  );
}
