
import React, { Component } from 'react';
import Card from '../Components/Card';
import tripsData from '../data/trips'



class TripsList extends Component {
  render() {
    return (
      <div>
        {tripsData.map(trip => {
          return (
            <Card key={trip.id} trip={trip} />
          );
        })}
      </div>
    )
  };

}

export default TripsList;