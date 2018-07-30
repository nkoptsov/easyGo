import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import TripsView from '../../Components/Trips/TripsView';
import TripsSearchForm from '../../Components/TripsSearchForm/TripsSearchForm';

class Trips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('/api/trips')
      .then(res => res.json())
      .then((res) => {
        this.setState({ data: res });
      });
  }
  
  handleSearchSubmit = (formData) => {
    console.log(formData);
    
    fetch(`/api/users/trips/search?${formData}`)
    .then((res) => {
        if (res.status === 200) this.setState({ data: res });
      })
    .catch(err => console.log(`request failed ${err.message}`));
  }

    render() {
      return (
            <div>
                <Header />
                <main>
                    <TripsSearchForm handleSearchSubmit={this.handleSearchSubmit} />
                    <TripsView data={this.state.data} />
                </main>
            </div>
      );
    }
}

export default Trips;
