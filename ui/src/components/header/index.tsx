import React from "react";
import "../styles/NavBar.css";
import LockIcon from "@mui/icons-material/Lock";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import CircleIcon from "@mui/icons-material/Circle";
import Button from "react-bootstrap/Button";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar_logo">
        <LockIcon />
        <span>FileShare</span>
      </div>
      <div className="NavBar_searchContainer">
        <div className="NavBar_searchBar">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="NavBar_icons">
        <span>
          <HelpOutlineIcon />
          <SettingsIcon />
        </span>
        {/* <img src={} alt="User Photo" /> */}
        {/* add images of the user */}
        <span>
          <CircleIcon />
          <Button variant="outline-dark">Login</Button>
          {""}
        </span>
      </div>
    </div>
  );
};

export default NavBar;
