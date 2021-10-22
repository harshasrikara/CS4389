import React from "react";
import "../styles/Sidebar.css";
import NewFile from "./NewFile";
import SidebarItem from "./SidebarItem";

const SideBar = () => {
  return (
    <div className="SideBar">
      <NewFile />
      <div className="SideBar_container">
        <hr />
      </div>
    </div>
  ); 
}

export default SideBar;
