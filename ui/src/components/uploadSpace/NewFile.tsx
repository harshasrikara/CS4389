import React, { useState } from "react";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import "../styles/NewFile.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const NewFile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [chosenFile, setChosenFile] = useState(null);

  let file_size;
  let file_name;

  // const [uploadFile, setUploadFile] = React.useState();
  

  const submitForm = (event: any) => {
    event.preventDefault();

    const dataArray = new FormData();

    axios
      .post("/", dataArray, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {})
      .catch((error) => {});
  };
  //storing file information before uploading to the server
  const fileChangedHandler = (event: any) => {

    setChosenFile(event.target.files[0]);
    file_size = event.target.files[0].size;
    //or if you like to have name and type
    file_name = event.target.files[0].name;
    //stores the file into the state
    console.log(event.target.files[0]);
    
   //do whatever operation you want to do here
};

  const handleClick = () => {};
  return (
    <div className="NewFile_container">
      {/* <AddIcon type="file" onChange={(e) => setUploadFile(e.target.files)} /> */}
      {/* accept=".pdf,.doc,.docx" */}
      {/* <input type="file" /> */}
      {/* submit button */}
      <div className="d-grid gap-2">
        <Button variant="outline-dark" size="lg" onClick={handleShow}>
          <AddIcon></AddIcon>
        </Button>
      </div>
{/* modal for handling file uploading */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="file" onChange={fileChangedHandler} />
        </Modal.Body>
        {/* <Modal.Body>Name: {chosenFile.name}</Modal.Body> */}
        {/* <Modal.Body>Size: {chosenFile.size}</Modal.Body> */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NewFile;
