import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

class RequestForm extends Component {
    
    render() {
        const { location, width, height, colors, comments} = this.props.appt
        return (
            <div>
        <Card className="text-center" >
           <Form  onSubmit={this.handleSubmit} onChange={this.handleChange} style={{ width: '18rem' }}>
             <Card.Header>Request Appointment</Card.Header>
             <Card.Body>
            <Form.Group controlId="appt">
              <Form.Label>Location</Form.Label>
              <Form.Text className="text-muted">
                Where will this tattoo be located?
              </Form.Text>
              <Form.Control value={location} name="location" placeholder="location" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Approximate Size?</Form.Label>
              <Form.Text className="text-muted">
                This will help the artist determine the ammount of time needed to complete the tattoo
              </Form.Text>
              <Form.Control value={width} type="text" name="width" placeholder="Width" onChange={this.handleChange}/>
              <Form.Control value={height} type="text" name="height" placeholder="Height" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Label>Number of Colors</Form.Label>
              <Form.Control value={colors} as="select" name="colors" custom>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Additional Comments</Form.Label>
              <Form.Control value={comments} as="textarea" name="comments" rows={3} />
            </Form.Group>
            </Card.Body>
            <Button variant="primary" type="submit">
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

export default RequestForm;