import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/header";
import SideBar from "./components/sideBar";
import FileSpace from "./components/fileSpace"

const App = () => {
  return (
    <div className="App">
      {/* header */}
      <NavBar />
      <SideBar />
      <FileSpace />
      {/* Authentication needed */}
      {/* Encryption Algorithm when uploaded*/}

    </div>
  );
}

export default App;
