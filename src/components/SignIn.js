import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';



class SignIn extends React.Component {
  
  
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.email.value);
    console.log(e.target.password.value);

    //this.props.dispatch({type: 'ADD_USER', value: })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })

    console.log(this.props.email);
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
    <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleChange}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" placeholder="Password" />
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

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(SignIn);