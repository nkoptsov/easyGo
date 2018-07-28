import React from 'react';
import {Link, Route } from 'react-router-dom';

import { Card, Button, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';

const CardTrip = ({ trip }) => {
    return (
        <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardHeader style={{fontWeight: 'bold'}}>{trip.name}</CardHeader>
            <CardBody inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle>Start: {trip.dateStart} End: {trip.dateEnd}</CardTitle>
                <CardText>{trip.description}</CardText>
                <Button><Link to={`./trips/${trip.id}`}>Подробнее</Link></Button>
            </CardBody>
        </Card>

    );
}

export default CardTrip;
