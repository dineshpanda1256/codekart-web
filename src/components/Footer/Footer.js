import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import logo from "../../assets/Images/Footer/Group 104.svg";

export default function Footer() {
  return (
    <>
      <Container fluid id="footer1">
        <Container>
          <Row>
            
          <Col md={3} lg={3} sm={12} xs={12} id="footer14">
              <img src={logo} alt="logo" style={{width: '60%'}} />
            </Col>
            <Col md={3} lg={3} sm={12} xs={12}>
              <Row id="footer2">INFORMATION</Row>
              <Row id="footer4">Pricing</Row>
              <Row id="footer3">About Us</Row>
              <Row id="footer3">Vedio Posts</Row>
            </Col>
            <Col md={3} lg={3} sm={12} xs={12}>
              <Row id="footer2">LEGAL</Row>
              <Row id="footer4">Terms and Conditions</Row>
              <Row id="footer3">Privacy Policy</Row>
            </Col>
            <Col md={3} lg={3} sm={12} xs={12} id="footer2">
              SOICAL LINKS
              <Row id="footer5">
                <div id="footer6">
                  <a href="http://www.youtube.com/" target="_blank">
                    <AiOutlineYoutube id="footer9" />
                  </a>
                </div>
                <div id="footer6">
                  <a href="https://www.facebook.com/" target="_blank">
                    <RiFacebookCircleFill id="footer9" />
                  </a>
                </div>
                <div id="footer6">
                  <a href="https://www.twitter.com/" target="_blank">
                    <AiOutlineTwitter id="footer9" />
                  </a>
                </div>
                <div id="footer6">
                  <a href="https://www.instagram.com/" target="_blank">
                    <AiOutlineInstagram id="footer9" />
                  </a>
                </div>
              </Row>
              <Row id="footer10">FAQ</Row>
              <Row id="footer11">Contact Us</Row>
            </Col>
          </Row>
        </Container>
        {/* <hr id="footer12"></hr> */}
        {/* <Container>
          <Row id="footer13">
            
          </Row>
        </Container> */}
      </Container>
      <Container fluid id="footer19">
        <Container>
          <Row id="footer16">
            {/* <Col id="footer17">Designed by Codekart solutions Pvt. Ltd</Col> */}
            <Col id="footer18">© Copyright Reserved by Codekart solutions Pvt. Ltd</Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
