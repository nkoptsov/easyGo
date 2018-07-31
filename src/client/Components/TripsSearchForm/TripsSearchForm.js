import React, { Component } from 'react';
import FormGroup from '../FormGroup/FormGroup';
import FormGroupDate from '../FormGroup/FormGroupDate';


class TripsSearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: '',
        dateStart: '',
        dateEnd: '',
        locationStart: '',
        locationEnd: '',
        userId: '',
        tripCost: '',
        description: '',
      },
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } });
  }

  onSubmit = (e) => {
    let formData = '';
    for (let key in this.state.data) {
      if (this.state.data[key]) {
        formData = formData + `${key}=${this.state.data[key]}&`;
      }
    }
    formData = formData.slice(0, -1);
    this.props.handleSearchSubmit(formData);
    e.preventDefault();
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container col-sm-6">
        <form className="searchForm" onSubmit={this.onSubmit}>
          <FormGroup for="name" type="text" id="name" placeholder="Enter trip name here.." name="name" label="Trip name" value={data.name} onChange={this.onChange} />
          <FormGroupDate for="dateStart" label="Date trip starts" id="dateStart" name="dateStart" value={data.dateStart} onChange={this.onChange} />
          <FormGroupDate for="dateEnd" label="Date trip ends" id="dateEnd" name="dateEnd" value={data.dateEnd} onChange={this.onChange} />
          <FormGroup for="locationStart" type="text" id="locationStart" placeholder="Where trip starts?" name="locationStart" label="Start location" value={data.locationStart} onChange={this.onChange} />
          <FormGroup for="locationEnd" type="text" id="locationEnd" placeholder="Where trip ends?" name="locationEnd" label="End location" value={data.locationEnd} onChange={this.onChange} />
          <button className="btn btn-primary">Search</button>
        </form>
      </div>
    );
  }
}

export default TripsSearchForm;
