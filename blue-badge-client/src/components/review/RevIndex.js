import React, { useState, useEffect } from "react";
import RevCreate from "./RevCreate";
import { Table } from "reactstrap";

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
    <Table dark>
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Review</th>
        </tr>
      </thead>
      <tbody>
            {reviews.map((review) => (
              <>
              <tr>
                <td>{review.title}</td>
                <td>{review.date}</td>
                <td>{review.entry}</td>
                </tr>
            </>
            ))}
      </tbody>
    </Table>
  );
};

export default RevIndex;
