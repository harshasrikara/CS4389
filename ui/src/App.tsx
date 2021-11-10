import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/header";
import SideBar from "./components/uploadSpace";
import FileSpace from "./components/fileSpace";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="App">
      {/* header */}
      {/* Add Google login as an authentication? */}
      <NavBar />
      <SideBar />
      <FileSpace />
      {/* Authentication needed */}
      {/* Encryption Algorithm when a file is uploaded*/}
      <Footer />
    </div>
  );
};

export default App;
