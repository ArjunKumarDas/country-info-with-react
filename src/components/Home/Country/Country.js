import React from 'react';
import './Country.css';
import { Col, Container, Row } from 'react-bootstrap';

const Country = (props) => {
    console.log(props);
    // props use and detruture
const {name, flag } = props.country;
// console.log(props.Country);
    return (
        <>
            <Row className="diplay-col">
                <Col> 
                 <p><img className="flag-size" src={flag} alt=""/></p>
                 <p className="bg-primary">{name}</p>
                </Col>
            </Row>
        </>
    );
};

export default Country;