import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.css";
import { Col, Row } from "react-bootstrap";
import { Images } from "../../constants/Images";
import logo from "../../assets/Images/Navbar/logo.png";
import { Link } from "react-router-dom";
import { NavConstants } from "../../navigations/NavConstants/index";


function Header() {
  return (
    <div id="Header2">
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="mb-3"
          collapseOnSelect="true"
        >
          <Container fluid>
            <Navbar.Brand  id="Header11">
              <img src={logo} alt="logo" id="Header13"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end  flex-grow-1 pe-5" id="Header10">
                  <Nav.Link eventKey="1" id="Header1">
                  <Link to="/"  id="Header12">
                    Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link eventKey="2" id="Header1">
                    <Link to={NavConstants.underconstrunction} id="Header12">
                    About Us
                    </Link>
                  </Nav.Link>
                  <Nav.Link eventKey="3"  id="Header1">
                  <Link to={NavConstants.underconstrunction} id="Header12">Services</Link></Nav.Link>
                  <Nav.Link eventKey="4" id="Header1"><Link to={NavConstants.underconstrunction} id="Header12">Careers</Link></Nav.Link>
                  <Nav.Link eventKey="5">
                  <Link to={NavConstants.underconstrunction} id="Header12">
                    <div id="Header3">Contactus</div>
                    </Link>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Container id="Header4">
        <Row>
            <Col  md={1}></Col>
          <Col md={5} id="Header7">
            <Row ><Col id="Header5">Transfering Industries With Technology</Col></Row>
            <Row ><Col md={11} id="Header6">we help visionary executives transform their ventures with technology to thrive in the digital era With more than 3 years of experience.</Col></Row></Col>
          <Col xs={12} md={6} id="Header9"><img src={Images.nav.image1}  id="Header8"/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
