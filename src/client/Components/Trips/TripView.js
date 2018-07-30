import React from 'react';
import {Link} from 'react-router-dom';
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';

const TripView = ({trip}) => {
    return (
        <div>
            <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardBody inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardTitle>{trip.name}</CardTitle>
                    <CardText>Date Start: {trip.dateStart}</CardText>
                    <CardText>Date End: {trip.dateEnd}</CardText>
                    <CardText>Location start: {trip.locationStart}</CardText>
                    <CardText>Location end: {trip.locationEnd}</CardText>
                    <CardText>Cost of Trip: {trip.tripCost}</CardText>
                    <CardText>Description: {trip.description}</CardText>
                    <Button>
                        <Link to={`../trips`}>Back</Link>
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
}

export default TripView;