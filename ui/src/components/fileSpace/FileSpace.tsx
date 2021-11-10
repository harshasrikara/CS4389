import React from "react";
import Row from "react-bootstrap/Row";
import FileCard from "./FileCard";
import "../styles/FileSpace.css";

let dateTemp: Date = new Date();

//sample file with info
var files: File[] = [
  { key: 1, fileName: "Available", date: dateTemp, size: 6 },
  { key: 2, fileName: "Ready", date: dateTemp, size: 7 },
  { key: 3, fileName: "Started", date: dateTemp, size: 8 },
  { key: 4, fileName: "new", date: dateTemp, size: 8 },
];

export type File = {
  key: number;
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
          <FileCard key={file.key} File={file}></FileCard>
        ))}
      </Row>
    </div>
  );
};

export default FileSpace;


// tsrcc
