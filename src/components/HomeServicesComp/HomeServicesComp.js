import React from "react";
import "./HomeServicesComp.css";
import { Col, Row } from "react-bootstrap";

export default function HomeServicesComp(props) {
  return (
    <>
      <div id="homeservicecomp1">
        <Row>
          <Col>
            <img src={props.img} alt="img" id="homeservicecomp2" />
          </Col>
        </Row>
        <div id="homeservicecomp3"  className="mt-4">{props.technologyname}</div>
        <div className="mt-2" id="homeservicecomp4">
            {props.techdescription}
        </div>
      </div>
    </>
  );
}
