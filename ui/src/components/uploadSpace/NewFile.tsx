import React, { useState } from "react";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import "../styles/NewFile.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const NewFile = () => {
  const [show, setShow] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // On file select (from the pop up)
  const onFileChange = (event: any) => {
    // Update the state
    setFileName(event.target.files[0].name);
    setFileSize(event.target.files[0].size);
  };

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
 

  const fileData = () => {
    if (fileName != "") {
      return (
        <div>
          <Modal.Body>
            <p>Name: {fileName}</p>
            <p>Size: {fileSize} bytes</p>
          </Modal.Body>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <Modal.Body>Choose before Pressing the Upload button</Modal.Body>
        </div>
      );
    }
  };

  const handleClick = () => {};
  return (
    <div className="NewFile_container">
      {/* accept=".pdf,.doc,.docx" */}
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
          <input accept=".txt" type="file" onChange={onFileChange} />
        </Modal.Body>
        {fileData()}
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
