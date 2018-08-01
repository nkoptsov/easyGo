import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import TripsView from '../../Components/Trips/TripsView';

class MyTrips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorFlag: false,
      data: []
    };
  }
  componentDidMount() {
    fetch('/api/users/trips/created',
      { credentials: 'include' })
      .then(res => {
        if(res.status === 200 ){
          
           this.setState({errorFlag:true});
           return res.json();
          }})
      .then(res => {

       
        this.setState({ data: res});
        console.log(this.state);
      })
      .catch(err => console.log(`request failed ${err.message}`));
  }
  render() {
    console.log(this.state);
    if(this.state.errorFlag){
      return(
      <div>
        <Header />
        <main>
        <TripsView data={this.state.data}/>  
        </main>
      </div>
      )
    }
    return (  
      <div>
        <Header />
        <main>
            <h1> Trips not found</h1>
        </main>
      </div>
    )
  }
}

export default MyTrips;