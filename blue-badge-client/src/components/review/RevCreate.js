import React, { useState } from 'react';
import {Button, Input, Form, FormGroup, Label} from 'reactstrap';

const RevCreate = (props) => {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [entry, setEntry] = useState('');
    // const [rating, setRating] = useState(''); Do we need to add RATING to model?
    
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
            props.fetchRev()
        })
    }

    return(
        <div>
            <h3>Post Review</h3>
            <Form onSubmit={handlePost}>
            <FormGroup>
                <Label htmlFor="title">Title</Label>
                <Input name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="date">Date</Label>
                <Input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="entry">Entry</Label>
                <Input type="textarea" name="entry" value={entry} placeholder="Write a Review..." style={{height: '200px'}}onChange={(e) => setEntry(e.target.value)}/>
            </FormGroup>
            <Button type="submit" style={{margin: '20px 0 10px 0'}}>POST</Button>
        </Form>
        </div>
    )
};

export default RevCreate;