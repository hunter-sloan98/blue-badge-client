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
                'Authorization': `${props.token}`
            })
        }) .then((res) => {
            props.fetchAll();
            props.updateOff();
        })
    }

    return(
        <Modal isOpen={true}>
        <ModalHeader className="modalHeader">Edit Your Review</ModalHeader>
        <ModalBody>
            <Form onSubmit={revUpdate}>
                <FormGroup>
                    <Label htmlFor="title" className="modalTitle">Edit Title:</Label>
                    <Input name="title" value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="date" className="modalTitle">Edit Date:</Label>
                    <Input name="date" value={editDate} onChange={(e) => setEditDate(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="entry" className="modalTitle">Edit Review:</Label>
                    <Input type="textarea" name="entry" value={editEntry} onChange={(e) => setEditEntry(e.target.value)}/>
                </FormGroup>
        <Button type="submit" className="updateButton" color="warning">Update Review</Button>
    </Form>
        </ModalBody>
    </Modal>
    )
};

export default RevEdit;