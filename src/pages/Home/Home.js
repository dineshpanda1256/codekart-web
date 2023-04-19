import React from "react";
import "./Home.css";
import { Images } from "../../constants/Images";
import { Container } from "react-bootstrap";


export default function Home() {
  return (
    <>
    <Container fluid> 
      <img src={Images.home.image1} alt="img" />
      </Container>
    </>
  );
}
