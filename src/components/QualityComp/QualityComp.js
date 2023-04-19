import React from "react";
import "./QualityComp.css";
import { Col, Row } from "react-bootstrap";
import HomeServicesComp from "../HomeServicesComp/HomeServicesComp";
import { Link } from "react-router-dom";
import { NavConstants } from "../../navigations/NavConstants";

export default function QualityComp({ quality }) {
  const CloudComputing = {
    image: require("../../assets/Images/Home/cloudComputing.gif"),
    head: "Cloud",
    head2:
      "Our custom software developers provide your business with velocity, reliability and functionality of the cloud technology that guards stability and fosters growth.",
  };

  const Native = {
    image: require("../../assets/Images/Home/react3.gif"),
    head: "Native Apps",
    head2: "Our custom software developers provide your business with velocity, reliability and functionality of the cloud technology that guards stability and fosters growth.",
  };

  const Support = {
    image: require("../../assets/Images/Home/support.gif"),
    head: "24/7 Support",
    head2: "Our custom software developers provide your business with velocity, reliability and functionality of the cloud technology that guards stability and fosters growth.",
  };

  return (
    <Row id="Quality1">
      <Col md={1}></Col>
      <Col md={3} id="Quality6">
        <Row>
          <Col id="Quality3">{quality.head}</Col>
        </Row>
        <Row>
          <Col id="Quality5">{quality.head2}</Col>
        </Row>
        <Row>
          <Col>
          <Link to={NavConstants.underconstrunction} id="Header12"> <div id="Solutions1">Explor All</div></Link>
          </Col>
        </Row>
      </Col>
      <Col></Col>
      <Col md={2}>
        <HomeServicesComp
          img={CloudComputing.image}
          technologyname={CloudComputing.head}
          techdescription={CloudComputing.head2}
        />
      </Col>
      <Col md={2}>
        <HomeServicesComp
          img={Native.image}
          technologyname={Native.head}
          techdescription={Native.head2}
        />
      </Col>{" "}
      <Col md={2}>
        <HomeServicesComp
          img={Support.image}
          technologyname={Support.head}
          techdescription={Support.head2}
        />
      </Col>
      <Col></Col>
    </Row>
  );
}
