import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import RevCreate from './RevCreate';
import RevEdit from './RevEdit';


import APISearch from './APISearch';


const RevDisplay = (props) => {

    const [reviews, setReviews] = useState([])
    const [revUpdateActive, setRevUpdateActive] = useState(false);
    const [updateMyRev, setUpdateMyRev] = useState({}); 

		
    const fetchAll = () => {
			fetch('http://localhost:3500/rev', {
					method: 'GET',
					headers: new Headers ({
							'Content-Type': 'application/json',
							'Authorization': `${props.token}`
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

    const editUpdateRev = (rev) => {
        setUpdateMyRev(rev)
    }

    const updateOn = () => {
        setRevUpdateActive(true)
    }

    const updateOff = () => {
        setRevUpdateActive(false)
    }

    return(
        <div>
            <RevCreate fetchAll={fetchAll} token={props.token}/>

            {/* Need to link to MY REVIEWS/ALL REVIEWS PAGE?? -- Still need to call editUpdateRev() and updateOn() */}

            {revUpdateActive ? <RevEdit updateMyRev={updateMyRev} updateOff={updateOff}  token={props.token} fetchAll={fetchAll} />
            : <></>}

					<Container>
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
            <APISearch />
						</Container>
        </div>
		)};

	

export default RevDisplay;