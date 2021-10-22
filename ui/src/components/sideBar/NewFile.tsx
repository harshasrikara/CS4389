import React from "react";
import AddIcon from "@mui/icons-material/Add";
import "../styles/NewFile.css";

const NewFile = () => {
  interface file {
    name: string;
    size: number;
  }

  

  const handleClick = () => {
    // console.log(file1.name);
    
  };

  return (
    <div className="NewFile">
      <div className="NewFile_container">
        <AddIcon onClick={handleClick} />
      </div>
    </div>
  );
};

export default NewFile;
