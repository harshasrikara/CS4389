import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface Props {}
interface State {}

export default class index extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <p>Logged in as: XXX</p>
        <Row xs={1} md={3} className="g-2">
          {Array.from({ length: 12 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Files Name</Card.Title>
                  <Card.Text>
                    File Description: File Size, Date Added, etc
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

// tsrcc
