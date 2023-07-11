import React from "react";
import Sidebar from "../../Sidebar/Sidebar";

const Layout = (props) => {
  return (
    <div className="dashboard">
      <div className="dashboard__placeholder"></div>
      {/* Sidebar Goes Here */}
      <Sidebar />
      {/* Dashboard Content Goes Here */}
      <div className="dashboard__content">{props.children}</div>
    </div>
  );
};

export default Layout;
