import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, Button, CardHeader, CardBody, CardTitle, CardText,
} from 'reactstrap';
import SubControl from './SubControl';
import isAuthorized from '../../Utils/isAuthorized';

const CardTrip = ({ trip }) => (
  <Card>
    <CardHeader tag="h3">
      {trip.name}
    </CardHeader>
    <CardBody>
      <CardTitle>
Start: {' '}
        { trip.dateStart }
      </CardTitle>
      <CardTitle>
End: {' '}
        { trip.dateEnd }
      </CardTitle>
      <CardText>
        { trip.description }
      </CardText>
      <Link to={`./trips/${trip.id}`}>
        <Button color="primary" style={{ marginRight: '10px' }}>
Learn more
        </Button>
      </Link>
      { isAuthorized() ? <SubControl tripId={trip.id} /> : null }
    </CardBody>
  </Card>

);

export default CardTrip;
