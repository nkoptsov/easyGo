import React from 'react';
import tripsData from '../data/trips'


const Trip = ({ match }) => {
  //const {name, dateStart, dateEnd, tripCost} = props;
  const trip = tripsData.find(trip => trip.id === parseInt(match.params.tripId));
  return (

    <main id="trip">
      <div>
        <div>
          <section>
            <h1>{trip.name}</h1>

            <p>{trip.dateStart}</p>
            <p>{trip.dateEnd}</p>
            <p>{trip.tripCost}</p>
            <p>{trip.locationStart}</p>
            <p>{trip.locationEnd}</p>
---------------------------
          </section>
        </div>
      </div>
    </main>
  );
}


export default Trip;