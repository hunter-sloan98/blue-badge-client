import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card, CardTitle, CardText } from "reactstrap";
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
        'Authorization': `${props.token}`,
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
            'Authorization': `${props.token}`
        })
    })
    .then(() => fetchAll())
}

  const revMapper = () => {
    return reviews.map((review, index) => {
      return (
        <div key={index}>
        <Row>
          <Col sm="6">
            <Card body className="reviewCard">
              <CardTitle tag="h3">{review.title}</CardTitle>
              <CardText>{review.date}</CardText>
              <CardText>{review.entry}</CardText>
              <Button onClick={() => {
              editUpdateRev(review);
              updateOn();
            }}
            reviews={reviews}
            editUpdateRev={editUpdateRev}
            updateOn={updateOn}
            fetchAll={fetchAll}
            token={props.token}
            className="reviewButton"
            color="warning">Edit</Button>
            <Button onClick={() => {
              deleteRev(review);
            }}
            className="reviewButton"
            color="warning">Delete</Button>
            </Card>
          </Col>
        </Row>
        </div>
      );
    });
  };

  return (
    <div>
      {/* <RevCreate fetchAll={fetchAll} token={props.token} /> */}

      {reviews.length > 0 ? revMapper() : <p className="noReviews">You have not posted any reviews yet.</p>}

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
    </div>
  );
};

export default RevDisplay;
