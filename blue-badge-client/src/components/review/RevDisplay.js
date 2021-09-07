import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import RevCreate from './RevCreate';
import APISearch from './APISearch';

const RevDisplay = (props) => {

    const [reviews, setReviews] = useState([])

    const fetchRev = () => {
        fetch('http://localhost:3500/rev', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }) .then((res) => res.json())
        .then((logRev) => {
            setReviews(logRev)
            console.log(logRev)
        })
    }   
    
    // useEffect(() => {
    //     fetchRev()
    // }, [])

    return(
        <Container className='auth-container'>
            <Row>
            <Col md='6'>
                <APISearch/>
            </Col>
            <Col md='6' className='login-col'>
                <RevCreate token={props.token}/>
            </Col>
        </Row>
        </Container>

    )
};

export default RevDisplay;