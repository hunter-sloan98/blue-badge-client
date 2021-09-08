import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import RevCreate from "./RevCreate";
import RevEdit from "./RevEdit";

const RevDisplay = (props) => {
  const [reviews, setReviews] = useState([]);
  const [revUpdateActive, setRevUpdateActive] = useState(false);
  const [updateMyRev, setUpdateMyRev] = useState({});

  const fetchAll = () => {
    fetch("http://localhost:3500/rev", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        'Authorization': `Bearer ${props.token}`,
      }),
    })
      .then((res) => res.json())
      .then((logRev) => {
        setReviews(logRev);
        console.log(logRev);
      });
  }; 

  useEffect(() => {
    fetchAll();
  }, []);

  const editUpdateRev = (rev) => {
    setUpdateMyRev(rev);
  };

  const updateOn = () => {
    setRevUpdateActive(true);
  };

  const updateOff = () => {
    setRevUpdateActive(false);
  };

  const deleteRev = (review) => {
    fetch(`http://localhost:3500/rev/delete/${review.id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.token}`
      })
    })
      .then(() => fetchAll())
  }

  const revMapper = () => {
    return reviews.map((review, index) => {
      return (
        <div key={index}>
          <div>{review.title}</div>
          <div>{review.date}</div>
          <div>{review.entry}</div>
          <Button
            onClick={() => {
              editUpdateRev(review);
              updateOn();
            }}
            reviews={reviews}
            editUpdateRev={editUpdateRev}
            updateOn={updateOn}
            fetchAll={fetchAll}
            token={props.token}
          >
            Edit
          </Button>
          <Button
            onClick={() => {
              deleteRev(review);
            }}
          >
            Delete
          </Button>
        </div>
      );
    });
  };

  return (
    <div>
      {/* <RevCreate fetchAll={fetchAll} token={props.token} /> */}

      {reviews.length > 0 ? revMapper() : "No Reviews Yet!"}

      {revUpdateActive ? (
        <RevEdit
          updateMyRev={updateMyRev}
          updateOff={updateOff}
          token={props.token}
          fetchAll={fetchAll}
        />
      ) : (
        <></>
      )}
      {/* <Container>
        <p>Anything</p>
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
      </Container> */}
    </div>
  );
};

export default RevDisplay;
