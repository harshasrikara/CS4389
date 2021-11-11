import React, { useState } from "react";
// import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import "../styles/NewFile.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const NewFile = () => {
  const [show, setShow] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState(0);
  const [selectedFile, setSelectedFile] = useState("");
  const [key, setKey] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // On file select (from the pop up)
  const onFileChange = (event: any) => {
    // Update the state
    setFileName(event.target.files[0].name);
    setFileSize(event.target.files[0].size);
    setSelectedFile(event.target.files[0]);
  };

  // const submitForm = (event: any) => {
  //   event.preventDefault();

  //   const dataArray = new FormData();

  //   axios
  //     .post("/", dataArray, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     .then((response) => {})
  //     .catch((error) => {});
  // };

  const fileUpload = (event: any) => {
    event.preventDefault();
    console.log("uploading file");

    const formData = new FormData();
    formData.append("toBeEncryptedFile", selectedFile, fileName);
    formData.append("key", key)
    console.log(selectedFile);
    console.log(key);

    axios.post("/uploadFile", formData, {
      headers: {
        "Access-Control-Allow-Origin": '*'
      }
    }).then((response) => {
      console.log(response);
      handleClose();
    });
  }
 
  const handleKey = (event: any) => {
    setKey(event.target.value); 
  }

  const fileData = () => {
    if (fileName !== "") {
      return (
        <div>
          <Modal.Body>
            <p>Name: {fileName}</p>
            <p>Size: {fileSize} bytes</p>

            <input type="text" placeholder="Encrypt with key" onChange={handleKey}/>
            <p><em>If none provided, a default key will be used</em></p>
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
          <Button variant="primary" onClick={fileUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NewFile;
