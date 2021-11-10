import React, {useState} from "react";
import "../styles/NavBar.css";
import { GitHubProvider } from "../../config/authMethods";
import LockIcon from "@mui/icons-material/Lock";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PersonIcon from "@mui/icons-material/Person";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { GitHub } from "@mui/icons-material";
import socialMediaAuth from "../../auth/auth";

const Header = () => {
  //handle help page
  const [showHelp, setShowHelp] = useState(false);
  const handleCloseHelp = () => setShowHelp(false);
  const handleShowHelp = () => setShowHelp(true);

  //handle aboutus page
  const [showAbout, setShowAbout] = useState(false);
  const handleCloseAbout = () => setShowAbout(false);
  const handleShowAbout = () => setShowAbout(true);

  //handle contact page
  const [showContact, setShowContact] = useState(false);
  const handleCloseContact = () => setShowContact(false);
  const handleShowContact = () => setShowContact(true);



  //handle login button pressed
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLoggedIn = () => setLoggedIn(true);
  const handleLoggedOut = () => setLoggedIn(false);

  const handleLoginOnClick = async (provider: any) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };

  return (
    <div className="NavBar">
      <div className="NavBar_logo">
        <LockIcon />
        <span>File Share</span>
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
          <Button variant="clear" onClick={handleShowContact}>
            <ContactMailIcon></ContactMailIcon>
          </Button>
          <Button variant="clear">
            <PersonIcon />
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleLoginOnClick(GitHubProvider)}
          >
            {/* Add link to github login page */}
            <GitHub></GitHub> Sign-In
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

      {/* modal for contact page */}
      <Modal size="lg" show={showContact} onHide={handleCloseContact}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>OUR CONTACT INFORMATION HERE</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseContact}>
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
    </div>
  );
};

export default Header;
