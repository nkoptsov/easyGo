import React,{Component} from 'react';
import Header from '../../Components/Header/Header';
import TripsList from './TripsList';

const Trips = (props) => (

  <div>
    <Header />
    <main>
      
      <TripsList/>
    </main>
  </div>
)

export default Trips;