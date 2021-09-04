import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Signup = (props) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3500/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        props.updateToken(data.sessionToken)
      })
  }

  return(
    <div className='signupMain'>
      <h3>Sign up</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor='email'>Email</Label>
          <Input onChange={(e) => setEmail(e.target.value)} name='email' value={email} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='password'>Password</Label>
          <Input onChange={(e) => setPassword(e.target.value)}  type='password' name='password' value={password} required />
        </FormGroup>
        <Button type='submit'>Join the Bandits</Button>
      </Form>
    </div>
  )
}

export default Signup;