import React from "react";
import AddIcon from "@mui/icons-material/Add";
import "../styles/NewFile.css";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const NewFile = () => {
  interface file {
    name: string;
    size: number;
  }

  const handleClick = () => {
    
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

// <Modal.Dialog>
    //   <Modal.Header closeButton>
    //     <Modal.Title>Modal title</Modal.Title>
    //   </Modal.Header>

    //   <Modal.Body>
    //     <p>Modal body text goes here.</p>
    //   </Modal.Body>

    //   <Modal.Footer>
    //     <Button variant="secondary">Close</Button>
    //     <Button variant="primary">Save changes</Button>
    //   </Modal.Footer>
    // </Modal.Dialog>;