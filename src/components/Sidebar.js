import React from "react";
import CreateInterestPoint from "./add-points/addPoint";
import GetInterestPoints from "./get-points/getPoints";
import "./Sidebar.css";

const Sidebar = ({ position, map }) => {
  return (
    <div className="sidebar">
      <h1>Share your favorite places with us!</h1>
      <hr />
      <CreateInterestPoint position={position} />
      <hr />
      <GetInterestPoints map={map} />
    </div>
  );
};

export default Sidebar;
