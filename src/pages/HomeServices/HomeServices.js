import React from "react";
import "./HomeServices.css";
import { Col, Container, Row } from "react-bootstrap";
import HomeServicesComp from "../../components/HomeServicesComp/HomeServicesComp";

import CloudComputing from "../../assets/Images/Home/cloudComputing.gif";
import ReactGif from "../../assets/Images/Home/react3.gif";
import Support from "../../assets/Images/Home/support.gif";
import Setting from "../../assets/Images/Home/settings.gif";

export default function HomeServices() {
  return (
    <>
      <Container>
        <Row className="mt-4 mb-2">
          <Col
            id="directionRowHomeservice"
            style={{ justifyContent: "space-between" }}
          >
            <div id="homeservice1">
              We Provide The Best <br /> Quality Services
            </div>
            <div id="homeservice2">
              We are technology solutions providing company <br /> all over the worldwide doing over
              2years
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <div id="homeservice3">
              <Row>
                <Col>
                  <img src={Setting} alt="img" id="homeservice4" />
                </Col>
              </Row>
              <div className="mt-4" id="homeservice5">Operations</div>
              <div className="mt-2" id="homeservice6">
                We Build a Strategy to streamline process, <br />
                implement workflows to run your business <br /> from anywhere
                and ensure operational <br /> excellence in effective.
              </div>
            </div>
          </Col>
          <Col md={4}>
            <HomeServicesComp img={CloudComputing} technologyname="Cloud Development" techdescription="Our custom software developers provide your business with velocity, reliability and functionality of the cloud technology that guards stability and fosters growth."/>
          </Col>
          <Col md={4}>
            <HomeServicesComp img={ReactGif} technologyname="Native Apps" techdescription="Our custom software developers provide your business with velocity, reliability and functionality of the cloud technology that guards stability and fosters growth." />
          </Col>
          <Col md={4}>
            <HomeServicesComp img={Support} technologyname="24/7 Support" techdescription="Our custom software developers provide your business with velocity, reliability and functionality of the cloud technology that guards stability and fosters growth." />
          </Col>
        </Row>
      </Container>
    </>
  );
}
