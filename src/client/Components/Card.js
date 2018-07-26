import React from 'react';
import {Link, Route } from 'react-router-dom';
import Trip from '../Pages/Trip';

const Card = ({ trip }) => {
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

export default Card;//