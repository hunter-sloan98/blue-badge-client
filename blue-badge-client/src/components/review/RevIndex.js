import React, {useState, useEffect} from 'react';
import RevCreate from './RevCreate';
import { Container, Row, Col } from 'reactstrap';

const RevIndex = (props) => {
	const [reviews, setReviews] = useState([])

	const fetchRev = () => {
		fetch('http://localhost:3500/rev/all', {
			method: 'GET',
			headers: new Headers ({
			'Content-Type': 'application/json',
			'Authorization': props.token
			})
			}).then((res) => res.json())
				.then((logRev) => {
					setReviews(logRev)
					console.log(logRev)
					console.log(reviews)
			}).catch(err => console.log(err))
	}   

	useEffect(() => {
		fetchRev()
	}, [])


return(
	<div>
		<h1>My Reviews</h1>
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
			</Container>
	</div>
)};

export default RevIndex;