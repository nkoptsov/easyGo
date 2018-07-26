import React, { Component } from 'react';
import Card from '../Components/Card';
// import tripsData from '../data/trips'



class TripsList extends Component {
  constructor(props){
    super(props);
    this.state= {
      data:[]
    }
  }
  componentDidMount(){
    fetch('/api/trips').then(res => res.json()).then(res => {
      this.setState({data: res});
    })
  }

  render() {
    const {data} =  this.state;
    return (
      <div>
        {data.map(trip => {
          return (
            <Card key={trip.id} trip={trip} />
          );
        })}
      </div>
    )
  };

}

export default TripsList;
