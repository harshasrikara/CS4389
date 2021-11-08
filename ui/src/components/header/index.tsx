import React, { useState } from "react";
import "../styles/NavBar.css";
import LockIcon from "@mui/icons-material/Lock";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PersonIcon from "@mui/icons-material/Person";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InfoIcon from "@mui/icons-material/Info";

const NavBar = () => {
  //handle login page useState
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //handle help page
  const [showHelp, setShowHelp] = useState(false);
  const handleCloseHelp = () => setShowHelp(false);
  const handleShowHelp = () => setShowHelp(true);

  //handle aboutus page
  const [showAbout, setShowAbout] = useState(false);
  const handleCloseAbout = () => setShowAbout(false);
  const handleShowAbout = () => setShowAbout(true);

  return (
    <div className="NavBar">
      <div className="NavBar_logo">
        <LockIcon />
        <span>File Share</span>
      </div>
      <div className="NavBar_searchContainer">
        <div className="NavBar_searchBar">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="NavBar_icons">
        <span>
          <Button variant="clear" onClick={handleShowHelp}>
            <HelpOutlineIcon />
          </Button>
        </span>
        {/* <img src={} alt="User Photo" /> */}
        {/* add images of the user */}
        <span>
          <Button variant="clear" onClick={handleShowAbout}>
            <InfoIcon></InfoIcon>
          </Button>
          <Button variant="clear">
            <PersonIcon />
          </Button>
          <Button variant="secondary" onClick={handleShow}>
            Login
          </Button>
        </span>
      </div>

      {/* modal for help page */}
      <Modal size="lg" show={showHelp} onHide={handleCloseHelp}>
        <Modal.Header closeButton>
          <Modal.Title>Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>INFORMATION ABOUT OUR APPLICATION</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseHelp}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* modal for about us page */}
      <Modal size="lg" show={showAbout} onHide={handleCloseAbout}>
        <Modal.Header closeButton>
          <Modal.Title>About Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>ABOUT US PAGE CONTNET</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAbout}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* modal for login page */}
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Sign-In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="email" placeholder="Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign-In
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NavBar;
