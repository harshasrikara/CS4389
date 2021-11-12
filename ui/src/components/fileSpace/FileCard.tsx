import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Files } from "./FileSpace";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "../styles/FileCard.css";


const FileCard: React.FC<Files> = (props): JSX.Element => {
  console.log(props.File);
  
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>{props.File.fileName}</Card.Title>
          {/* <Card.Text>File Size:{props.File.size}</Card.Text>
          <Card.Text>Uploaded Date:{props.File.date.toString()}</Card.Text> */}
          <div className="FileCardButton">
            <Button size="sm" variant="outline-dark">
              <DownloadIcon></DownloadIcon>
            </Button>
            <Button size="sm" variant="outline-dark">
              <DeleteOutlineIcon></DeleteOutlineIcon>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default FileCard;
