import React from 'react'
import { Card, Icon} from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'

const ApptCard = (props) => {
  
  return(
  <Container>
    <Card>
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>Created at: {props.appt.created_at}</span>
      </Card.Meta>
      <Card.Description>{props.appt.location}</Card.Description>
      <Card.Description>{props.appt.height}</Card.Description>
      <Card.Description>{props.appt.width}</Card.Description>
      <Card.Description>{props.appt.colors}</Card.Description>
      <Card.Description>{props.appt.note}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      
        <Icon name='red certificate' />
        {props.appt.status}
        <button onClick={(e) => props.edit(e, props.appt)}  class="ui right floated button">Edit</button>
    </Card.Content>
  </Card>

  </Container>
  )
}

export default ApptCard