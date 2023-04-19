import React from 'react'
import "./QualityComp.css";
import { Col, Row } from 'react-bootstrap';
import QualityCompCard from '../QualityCompCard/QualityCompCard';

export default function QualityComp({quality}) {
  return (
    <Row id="Quality1">
        <Col md={1}></Col>
        <Col md={3}>
        <Row><Col id="Quality3">{quality.head}</Col></Row>
            <Row><Col id="Quality5">{quality.head2}</Col></Row>    
            <Row><Col><div id="Solutions1">Explor All</div></Col></Row>
        </Col>
        <Col><QualityCompCard/></Col>
        <Col></Col>
        <Col></Col>


    
    </Row>
  )
}
