import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3500/user/login', {
            method: 'POST',
            body: JSON.stringify({ email: email, password: password }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                props.updateToken(data.sessionToken)
            })
    }

    return (
        <div>
            <h3>Login</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    {/* <Label htmlFor="email">Email</Label> */}
                    <Input onChange={(e) => setEmail(e.target.value)} name="email"
                        value={email} type='email' placeholder='Email' pattern=".+@email\.com"/>
                </FormGroup>
                <br/>
                <FormGroup>
                    {/* <Label htmlFor="password">Password</Label> */}
                    <Input onChange={(e) => setPassword(e.target.value)} name="password"
                        value={password} type="password" placeholder='Password' minLength='5'/>
                </FormGroup>
                <br/>
                <Button type="submit" style={{color: "black"}}>Rejoin the Posse</Button>
            </Form>
        </div>
    )
}

export default Login;
