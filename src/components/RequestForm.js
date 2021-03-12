import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import { newApptAdded } from '../actions/index'
import { connect } from 'react-redux'

class RequestForm extends Component {
  constructor(){
    super()
   this.state = {
      location: '',
      width: '',
      height: '',
      colors: '',
      note: '',
      status: "pending"
   }
  }
  

 handleChange = event => {
  console.log(`${event.target.name}: ${event.target.value}`);

 this.setState({
   [event.target.name]: event.target.value
 })
}


  
    handleEditForm = (e) => {
    e.preventDefault()
    const { id } = this.props.history.location.state

      const reqObj = {
        method: 'PATCH',
        headers: {
         'Content-Type': 'application/json'
       },
        body: JSON.stringify(this.state)
      }

       fetch(`http://localhost:3000/appointments/${id}`, reqObj)
        .then(resp => resp.json())
        .then(respData => {
          console.log(respData);
          this.props.newApptAdded(respData)
       })
    }
    componentDidMount(){
      console.log(this.props.history.location.state);
      const { location, width, height, colors, note} = this.props.history.location.state
      this.setState({
        location: location,
        width: width,
        height: height,
        colors: colors,
        note: note,
        status: "pending"
      })
    }


    
    render() {
    const { location, width, height, colors, note} = this.state
    return (
            <div>
        <Card className="text-center" >
           <Form style={{ width: '18rem' }}>
             <Card.Header>Edit Request Appointment</Card.Header>
             <Card.Body>
            <Form.Group controlId="appt">
              <Form.Label>Location</Form.Label>
              <Form.Text className="text-muted">
                Where will this tattoo be located?
              </Form.Text>
              <Form.Control onChange={this.handleChange} value={location} name="location" placeholder="location" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Approximate Size?</Form.Label>
              <Form.Text className="text-muted">
                This will help the artist determine the ammount of time needed to complete the tattoo
              </Form.Text>
              <Form.Control onChange={this.handleChange} value={width} type="text" name="width" placeholder="Width" />
              <Form.Control onChange={this.handleChange} value={height} type="text" name="height" placeholder="Height" />
            </Form.Group>
            <Form.Label>Number of Colors</Form.Label>
              <Form.Control onChange={this.handleChange} value={colors} as="select" name="colors" custom>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Additional Comments</Form.Label>
              <Form.Control onChange={this.handleChange} value={note} as="textarea" name="note" rows={3} />
            </Form.Group>
            </Card.Body>
            <Button onClick={this.handleEditForm} variant="primary" type="submit">
              Update
            </Button>
            <Button variant="primary" type="submit">
              Cancel
            </Button>
           </Form>
        </Card>
            </div>
        );
    }
}

const mapDispatchToProps = {
    newApptAdded
}

export default connect(null, mapDispatchToProps )(RequestForm);