import React from 'react';
import {Link} from 'react-router-dom';

import { Card, Button, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';

const CardTrip = ({ trip }) => {
    return (
        <Card>
            <CardHeader tag="h3">{trip.name}</CardHeader>
            <CardBody>
                <CardTitle>Start: {trip.dateStart}</CardTitle>
                <CardTitle>End: {trip.dateEnd}</CardTitle>
                <CardText>{trip.description}</CardText>
                <Link to={`./trips/${trip.id}`}>
                    <Button color="primary">Learn more</Button>
                </Link>
             </CardBody>
        </Card>

    );
}

export default CardTrip;
