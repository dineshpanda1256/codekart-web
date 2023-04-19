import React from 'react'
import "./SolutionsComp.css";
import { Col, Row } from 'react-bootstrap';

export default function SolutionsComp({sol, cli}) {
  return (
    <>
    {sol ? <Row id="Solutions5">
        <Col></Col>
        <Col md={5}></Col>
        <Col md={5}>
            <Row><Col id="Solutions2">{sol.head}</Col></Row>
            <Row><Col id="Solutions4">{sol.head2}</Col></Row>    
            <Row><Col id="Solutions3">{sol.head3}</Col></Row>
            <Row><Col><div id="Solutions1">Read More</div></Col></Row>
        </Col>
        <Col></Col>
    </Row>: null }

    {cli ? <Row id="Solutions5">
        <Col></Col>
        <Col md={5}>
            <Row><Col id="Solutions2">{cli.head}</Col></Row>
            <Row><Col id="Solutions4">{cli.head2}</Col></Row>    
            <Row><Col id="Solutions3">{cli.head3}</Col></Row>
            <Row><Col><div id="Solutions1">Read More</div></Col></Row>
        </Col>
        <Col md={5}></Col>
        <Col></Col>
    </Row>: null }

    </>
  )
}
