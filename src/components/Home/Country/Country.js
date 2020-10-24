import React from 'react';
import './Country.css';
import { Col, Container, Row } from 'react-bootstrap';

const Country = (props) => {
    // console.log(props);
    // props use and detruture
const {name, flag, population, currency } = props.country;
// console.log(props.Country);
    return (
        <>
        {/* <p>{country.length}</p> */}
            <Row className="display-col m-2">
               <div className="border pt-1">
               <Col md={6}> 
                   <p><img className="flag-size" src={flag} alt=""/></p>
                   <p>{name}</p>
                   <p>{population}</p>
                   <button
                    className="btn btn-primary">Add</button>
                </Col>
               </div>
            </Row>
        </>
    );
};

export default Country;