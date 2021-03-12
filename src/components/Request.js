import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { createNewAppointment } from '../actions/index'




class Request extends React.Component {
 state = {
   location: '',
   width: '',
   height: '',
   colors: '',
   comments: '',
   user_id: this.props.currentUser_Id,
   status: "pending"
}

 handleChange = event => {
    console.log(`${event.target.name}: ${event.target.value}`);

   this.setState({
     [event.target.name]: event.target.value
   })
 }
 
 handleSubmit = (e) => {
   e.preventDefault()
   console.log(this.state);
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }
    
   fetch('http://localhost:3000/appointment', reqObj)
    .then(resp => resp.json())
    .then(respData  => {
      console.log(respData)
      this.props.createNewAppointment(respData)
    })
 }

  render() {
    //const { location, width, height, colors, comments} = this.history.state.state
    //console.log(this.props.location.state.detail);
        return (<div>
          <h1>Request Appointment</h1>
          <Card className="text-center" >
           <Form  onSubmit={this.handleSubmit} onChange={this.handleChange} style={{ width: '18rem' }}>
             <Card.Header>Request Appointment</Card.Header>
             <Card.Body>
            <Form.Group controlId="appt">
              <Form.Label>Location</Form.Label>
              <Form.Text className="text-muted">
                Where will this tattoo be located?
              </Form.Text>
              <Form.Control name="location" placeholder="location" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Approximate Size?</Form.Label>
              <Form.Text className="text-muted">
                This will help the artist determine the ammount of time needed to complete the tattoo
              </Form.Text>
              <Form.Control type="text" name="width" placeholder="Width" onChange={this.handleChange}/>
              <Form.Control type="text" name="height" placeholder="Height" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Label>Number of Colors</Form.Label>
              <Form.Control as="select" name="colors" custom>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Additional Comments</Form.Label>
              <Form.Control as="textarea" name="comments" rows={3} />
            </Form.Group>
            </Card.Body>
            <Button variant="primary" type="submit">
              Submit
            </Button>
           </Form>
        </Card>
       </div>          
        )
    }
}

const mapDispatchToProps = {
    createNewAppointment
}

const mapStateToProps = (state) => {
  return {
    currentUser_Id: state.currentUser.id
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Request);