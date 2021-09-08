import React, { useState, useEffect } from "react";
import RevCreate from "./RevCreate";
import { Container, Row, Col } from "reactstrap";

const RevIndex = (props) => {
  console.log(props.token);
  const [reviews, setReviews] = useState([]);

  const fetchRev = () => {
    console.log("fetching?");
    fetch("http://localhost:3500/rev/all", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": props.token
      }),
    })
      .then((res) => res.json())
      .then((logRev) => {
        setReviews(logRev);
        console.log(logRev);
        console.log(reviews);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchRev();
  }, []);
  console.log(reviews);

  return (
    <div>
      <h1>All Reviews</h1>
      <Container>
        <Row>
          <Col md="3">
            {reviews.map((review) => (
              <>
                <div>{review.title}</div>
                <div>{review.date}</div>
                <div>{review.entry}</div>
              </>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RevIndex;
