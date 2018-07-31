import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';
import SubControl from './SubControl';
import isAuthorized from '../../Utils/isAuthorized';

const CardTrip = ({ trip }) => (
  <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
    <CardHeader style={{ fontWeight: 'bold' }}> {trip.name}    </CardHeader>
    <CardBody inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
      <CardTitle>Start: {trip.dateStart}</CardTitle>
      <CardTitle>End: {trip.dateEnd} </CardTitle>
      <CardText>{trip.description} </CardText>
      <Button>
          <Link to={`./trips/${trip.id}`}> Learn more </Link>
      </Button>
      { isAuthorized() ? <SubControl tripId={trip.id} /> : null }
    </CardBody>
  </Card>

);

export default CardTrip;
