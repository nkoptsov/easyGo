import React from 'react';
import {Link} from 'react-router-dom';

import { Card, Button, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';

const CardTrip = ({ trip }) => {
    return (
        <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardHeader style={{fontWeight: 'bold'}}>{trip.name}</CardHeader>
            <CardBody inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle>Start: {trip.dateStart}</CardTitle>
                <CardTitle>End: {trip.dateEnd}</CardTitle>
                <CardText>{trip.description}</CardText>
                <Button>
                    <Link to={`./trips/${trip.id}`}>Learn more</Link>
                </Button>
            </CardBody>
        </Card>

    );
}

export default CardTrip;
