import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { addUserSuccess } from '../actions/index'



class SignIn extends React.Component {
  state = {
    email: 'e@d.com',
    password: '123'
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    
     const reqObj = {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(this.state)
     }
     
    fetch('http://localhost:3000/user', reqObj)
     .then(resp => resp.json())
     .then(respData  => {
       this.props.addUserSuccess(respData)
     })
  }

  render() {
        return (
          <h1>Sign in</h1>,
          <Card className="text-center" style={{ width: '18rem' }}>
          <Form  onSubmit={this.handleSubmit}>
          <Card.Header>Sign In</Card.Header>
          <Card.Body>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email" value={this.state.email}onChange={this.handleChange}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  </Card.Body>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Card>
          
        )
    }
}

const mapDispatchToProps = {
    addUserSuccess
}

export default connect(null, mapDispatchToProps)(SignIn);