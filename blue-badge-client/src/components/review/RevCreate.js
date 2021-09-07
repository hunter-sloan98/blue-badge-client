import React, { useState } from "react";
import {
  Button,
  Input,
  Form,
  FormGroup,
  Label,
  Popover,
  PopoverBody,
} from "reactstrap";

const RevCreate = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [entry, setEntry] = useState("");
  // const [rating, setRating] = useState(''); DO WE NEED TO ADD RATING TO MODEL?
  const [popoverOpen, setPopoverOpen] = useState(false);
    
    const handlePost = (e) => {
        e.preventDefault();
        fetch('http://localhost:3500/rev/create', {
            method: 'POST',
            body: JSON.stringify({rev: {title: title, date: date, entry: entry}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((logRev) => {
            console.log(logRev)
            setTitle('')
            setDate('')
            setEntry('')
          
        })
    }

    return (
      <div className="revCreate">
        <h3 className="revCreateTitle">Your Review</h3>
        <Form onSubmit={handlePost}>
          <FormGroup>
            <Label htmlFor="title" className="revCreateLabel">
              Title:
            </Label>
            <Input
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="date" className="revCreateLabel">
              Date:
            </Label>
            <Input
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="entry" className="revCreateLabel">
              Entry:
            </Label>
            <Input
              type="textarea"
              name="entry"
              value={entry}
              placeholder="Write a review..."
              style={{ height: "200px" }}
              onChange={(e) => setEntry(e.target.value)}
            />
          </FormGroup>
          <Button
            className="revCreateButton"
            type="submit"
            color="warning"
            id="Popover"
            size="lg"
          >
            Post Review
          </Button>
          <Popover className="popover" placement="right" isOpen={popoverOpen} trigger="focus" target="Popover" toggle={() => {setPopoverOpen(!popoverOpen)}}>
              <PopoverBody>Review Posted!</PopoverBody>
          </Popover>
        </Form>
      </div>
    );
};

export default RevCreate;
