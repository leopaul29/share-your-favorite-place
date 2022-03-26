import React from "react";
import { getInterestPointsQuery } from "../../queries/index";
import { useQuery } from "@apollo/client";
// import toast from "toasted-notes";
// import "toasted-notes/src/styles.css";
import "./getPoints.css";

export default function GetInterestPoints() {
  const { error, loading, data } = useQuery(getInterestPointsQuery);
  if (loading) {
    return <p className="load">Loading...</p>;
  }
  if (error) {
      console.log("An error occured", error);
    // return toast.notify("An error occured!");
  }

  return (
    <div>
      <p className="title">All notes.</p>
      {data.InterestPoints.map((item) => (
        <div key={item.id} className="list-head">
          <ul className="list-items">
            <li className="item-name">{item.longitude}</li>
            <li className="item-tag">{item.latitude}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}