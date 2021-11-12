import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import FileCard from "./FileCard";
import "../styles/FileSpace.css";
import firebase from "../../config/firebase-config";
import { Filter2Sharp } from "@mui/icons-material";
import { isTemplateSpan } from "typescript";

export interface gcpFile {
  name: string;
  link: string;
}

export type File = {
  fileName: string;
}

export interface Files {
  File: Files;
}

const FileSpace = () => {
  const [uid, setUID] = useState("Not Signed In");
  const [files, setFiles] = useState<gcpFile[]>([]);
  const [loading, setLoading] = useState(false);

  const storage = firebase.storage();
  const storageRef = storage.ref(); 

  const checkFiles = async () => {
    setLoading(true);
    const ref = storageRef.child(uid);
    console.log(ref);
    ref.listAll().then((res) => {
      const newArr: gcpFile[] = [];
      res.items.forEach(async (itemRef) => {
        newArr.push({name: itemRef.name, link: await itemRef.getDownloadURL()});
      });
      return newArr;
    }).then((res) => {
      setFiles(res);
      setLoading(false);
      console.log(files);
    });
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      setUID(uid);
    } else {
      // User is signed out
      setUID("Not Signed In");
    }
  });

  return (
    <div className="FileSpace">
      <button onClick={async () => { await checkFiles() }}>Refresh</button>
      <p>Signed in as: {uid}</p>
      <p>{loading ? "loading" : ""}</p>
      <Row xs={1} md={4} className="g-2">
        {files.map((file) => (
          <FileCard name={file.name} link={file.link}/>
        ))}
      </Row>
    </div>
  );
};

export default FileSpace;

// tsrcc
