import React, { useState } from "react";
import "../styles/NavBar.css";
import { GitHubProvider } from "../../config/authMethods";
import { Button, Modal } from "react-bootstrap";
import socialMediaAuth from "../../auth/auth";

import firebase from "../../config/firebase-config";
import LockIcon from "@mui/icons-material/Lock";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { GitHub } from "@mui/icons-material";

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

  //handle user info page
  const [showUserInfo, setshowUserInfo] = useState(false);
  const handleCloseUserInfo = () => setshowUserInfo(false);
  const handleShowUserInfo = () => setshowUserInfo(true);

  //handle login button pressed
  const [statusLoggedIn, setStatusLoggedIn] = useState(false);
  const handleStatusLoggedIn = () => setStatusLoggedIn(true);
  const handleStatusLoggedOut = () => setStatusLoggedIn(false);

  //handle email address of user
  const [userInfo, setUserInfo] = useState<{
    email: null | string;
    UID: null | number;
  }>({ email: null, UID: null });

  //sign in the user
  const handleLoginOnClick = async (provider: any) => {
    const res = await socialMediaAuth(provider);

  };

  //handle logout
  function handleLogout() {
    firebase.auth().signOut();
  }

  //auth state changes then
  const authState = firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      handleStatusLoggedIn();
    } else {
      //not signed in.
      handleStatusLoggedOut();
    }
  });

  //whether to show sign in or sign out
  const signInOut = () => {
    if (statusLoggedIn === false) {
      return (
        <Button
          variant="secondary"
          onClick={() => handleLoginOnClick(GitHubProvider)}
        >
          {/* Add link to github login page */}
          <GitHub></GitHub> Sign In
        </Button>
      );
    } else {
      return (
        <Button variant="secondary" onClick={handleLogout}>
          {/* Add link to github login page */}
          <GitHub></GitHub> Sign Out
        </Button>
      );
    }
  };
  
  //whether to show user info or default user info
  const userInfoShow = () => {
    if (statusLoggedIn === false) {
      return <p>Please Sign-In before viewing your information</p>;
    } else {
      const user = firebase.auth().currentUser;
      const email = user?.email;
      const UID = user?.uid;
      console.log(email);
      console.log(UID);
      const tempUserInfo = {
        email: email,
        UID: UID,
      };
      console.log(tempUserInfo);
      return ( 
        <>
        <p>Email Address: {tempUserInfo.email}</p>
        <p>User UID: {tempUserInfo.UID} ** WILL BE REMOVED: JUST FOR TESTING **</p>
        </>
      );
    }
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
        <span>
          <Button variant="clear" onClick={handleShowAbout}>
            <InfoIcon></InfoIcon>
          </Button>
          <Button variant="clear" onClick={handleShowContact}>
            <ContactMailIcon></ContactMailIcon>
          </Button>
          <Button variant="clear" onClick={handleShowUserInfo}>
            <PersonIcon />
          </Button>
          {signInOut()}
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

      {/* modal for user info page */}
      <Modal size="sm" show={showUserInfo} onHide={handleCloseUserInfo}>
        <Modal.Header closeButton>
          <Modal.Title>User Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>{userInfoShow()}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUserInfo}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Header;
