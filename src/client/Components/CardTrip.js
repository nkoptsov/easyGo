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
                <Button><Link to={`./trips/${trip.id}`}>Обновить путешествие</Link></Button>
            </CardBody>
        </Card>

    );
}

export default CardTrip;
/*
const CardTrip = ({ trip }) => {
    return (
        <div className="card-trip">
            <div>
                <section >
                    <h2>{trip.name}</h2>
                    <p >{trip.dateStart}</p>
                    <p>{trip.dateEnd}</p>
                    <p>{trip.tripCost}</p>
                </section>
            </div>

            <section className="card__actions">
                <Link to={`/trips/${trip.id}`}>Подробнее</Link>
            </section>


        </div>
    );
}

export default CardTrip;
*/