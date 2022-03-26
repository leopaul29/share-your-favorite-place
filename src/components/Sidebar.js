import React from "react";
import CreateInterestPoint from "./add-points/addPoint";
import GetInterestPoints from "./get-points/getPoints";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Sidebar</h1>

      <CreateInterestPoint />
      <GetInterestPoints />
    </div>
  );
};

export default Sidebar;
