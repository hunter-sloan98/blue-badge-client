import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const RevEdit = (props) => {

    const [editTitle, setEditTitle] = useState(props.updateMyRev.title);
    const [editDate, setEditDate] = useState(props.updateMyRev.date);
    const [editEntry, setEditEntry] = useState(props.updateMyRev.entry);

    const revUpdate = (e, rev) => {
        e.preventDefault();
        fetch(`http://localhost:3500/rev/update/${props.updateMyRev.id}`, {
            method: 'PUT',
            body: JSON.stringify({rev: {title: editTitle, date: editDate, entry: editEntry}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => {
            props.fetchAll();
            props.updateOff();
        })
    }

    return(
        <Modal isOpen={true}>
        <ModalHeader>Edit Your Review</ModalHeader>
        <ModalBody>
            <Form onSubmit={revUpdate}>
                <FormGroup>
                    <Label htmlFor="title">Edit Title:</Label>
                    <Input name="title" value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="date">Edit Date:</Label>
                    <Input name="date" value={editDate} onChange={(e) => setEditDate(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="entry">Edit Entry:</Label>
                    <Input type="textarea" name="entry" value={editEntry} onChange={(e) => setEditEntry(e.target.value)}/>
                </FormGroup>
        <Button type="submit" style={{margin: '20px 0 10px 0'}}>Update Review</Button>
    </Form>
        </ModalBody>
    </Modal>
    )
};

export default RevEdit;