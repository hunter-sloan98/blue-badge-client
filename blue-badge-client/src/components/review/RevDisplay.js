import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import RevCreate from './RevCreate';


import APISearch from './APISearch';


const RevDisplay = (props) => {

    const [reviews, setReviews] = useState([])

		
    const fetchAll = () => {
			fetch('http://localhost:3500/rev', {
					method: 'GET',
					headers: new Headers ({
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${props.token}`
					})
			}).then((res) => res.json())
			.then((logRev) => {
					 setReviews(logRev)
					console.log(logRev)
			})
	}   

		
		


    

    useEffect(() => {
				fetchAll()
    }, [])

    return(
        <div>
					<Container>
						<p>Anything</p>
			<Row>
				<Col md="3">
            {
							reviews.map(review => 
								(
									<>
									<div>{review.title}</div>
									<div>{review.date}</div>
									<div>{review.entry}</div>
									</>
								)
							)
						}
						</Col>
						</Row>
						</Container>

        </div>

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