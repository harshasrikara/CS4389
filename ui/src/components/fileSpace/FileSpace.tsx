import React from "react";
import Row from "react-bootstrap/Row";
import FileCard from "./FileCard";
import "../styles/FileSpace.css";
import firebase from "../../config/firebase-config";
import { Filter2Sharp } from "@mui/icons-material";
import { isTemplateSpan } from "typescript";

let dateTemp: Date = new Date();

const user = firebase.auth().currentUser;
const currentUID: any = "4eBy3u7ViwPl0tn5W01NvH1j77H3";
var storage = firebase.storage();
var storageRef = storage.ref();
var pathReference = storage.ref(currentUID + "/Untitled.txt");

// to fetch download link
// pathReference.getDownloadURL().then(function (url) {

//   console.log(url);

// })

var listRef = storageRef.child("4eBy3u7ViwPl0tn5W01NvH1j77H3");
// console.log(pathReference);
// Find all the prefixes and items.
// Create a reference under which you want to list
var listRef = storageRef.child("files/uid");

// Find all the prefixes and items.
listRef
  .listAll()
  .then((res) => {
    console.log("LOL");
    
    res.items.forEach(async (itemRef) => {
      var tempURL = itemRef.getDownloadURL();

      var tempName = itemRef.name;
      var tempFile: File = {
        fileName: tempName,
        // link: tempLink
      };
      files.push(tempFile);
      console.log(tempName);
    });
  })
  .catch((error) => {
    // Uh-oh, an error occurred!
  });

//sample file with info
var files: File[] = [];

// Promise.all(resList.items.forEach(itemRef => {
//   return
// }))

export type File = {
  fileName: string;
  // link: string;
};
// date: Date;
// size: number;

export interface Files {
  File: File;
}

const FileSpace = () => {
  return (
    <div className="FileSpace">
      <p>Signed in as: NAME</p>
      <Row xs={1} md={4} className="g-2">
        {files.map((file) => (
          <FileCard File={file}></FileCard>
        ))}
      </Row>
    </div>
  );
};

export default FileSpace;

// tsrcc
