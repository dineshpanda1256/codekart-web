import React from 'react'
import "./SolutionsComp.css";
import { Col, Row } from 'react-bootstrap';
import { Images } from '../../constants/Images';
import { Link } from 'react-router-dom';
import { NavConstants } from '../../navigations/NavConstants';

export default function SolutionsComp({sol, cli}) {
  return (
    <>
    {sol ? <Row id="Solutions5">
        <Col md={{span:1, order:'0'}}></Col>
        <Col md={{span:5, order:'1'}} xs={{span:12, order:'3'}}><img src={Images.home.image3} id="Solutions8"/></Col>
        <Col md={{span:5, order:'3'}} xs={{span:12, order:'1'}} id="Solutions7">
            <Row><Col id="Solutions2">{sol.head}</Col></Row>
            <Row><Col id="Solutions4">{sol.head2}</Col></Row>    
            <Row><Col id="Solutions3">{sol.head3}</Col></Row>
            <Row><Col> <Link to={NavConstants.underconstrunction} id="Header12"><div id="Solutions1">Read More</div></Link></Col></Row>
        </Col>
        <Col md={{span:1, order:'4'}}></Col>
    </Row>: null }

    {cli ? <Row id="Solutions5">
    <Col md={{span:1, order:'0'}}></Col>
    
        <Col id="Solutions7" md={{span:5, order:'1'}} xs={{span:12, order:'3'}}>
            <Row><Col id="Solutions2">{cli.head}</Col></Row>
            <Row><Col id="Solutions4">{cli.head2}</Col></Row>    
            <Row><Col id="Solutions3">{cli.head3}</Col></Row>
            <Row><Col><Link to={NavConstants.underconstrunction} id="Header12"><div id="Solutions1">Read More</div></Link></Col></Row>
        </Col>
        {/* <Col md={1}></Col> */}

        <Col md={{span:5, order:'3'}} xs={{span:12, order:'1'}}><img src={Images.home.image4} id="Solutions6"/></Col>
        <Col md={{span:1, order:'2'}}></Col>

    </Row>: null }

    </>
  )
}
