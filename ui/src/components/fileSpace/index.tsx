import React from "react";
import Row from "react-bootstrap/Row";
import FileCard from "./FileCard";
import "../styles/FileSpace.css";

let dateTemp: Date = new Date();

//sample file with info
var files: File[] = [
  { id: 0, fileName: "Available", date: dateTemp, size: 6 },
  { id: 1, fileName: "Ready", date: dateTemp, size: 7 },
  { id: 2, fileName: "Started", date: dateTemp, size: 8 },
  { id: 3, fileName: "new", date: dateTemp, size: 8 },
];

export type File = {
  id: number;
  fileName: string;
  date: Date;
  size: number;
}

export interface Files {
  File: File,
}


const FileSpace = () => {
  return (
    <div className="FileSpace">
      <p>Signed in as: NAME</p>
      <Row xs={1} md={4} className="g-2">
        {files.map((file, idx) => (
          <FileCard File={file}></FileCard>
        ))}
      </Row>
    </div>
  );
};

export default FileSpace;


// tsrcc
