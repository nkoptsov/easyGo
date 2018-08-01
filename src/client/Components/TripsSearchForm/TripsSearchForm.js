import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { Collapse, Button } from 'reactstrap';
import FormGroupDate from '../FormGroup/FormGroupDate';
import FormGroup from '../FormGroup/FormGroup';


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
        description: '',
      },
      tripCost: { min: 0, max: 1000 },
      collapse: false,
      errors: {},
    };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  onChange = (e) => {
    this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } });
  }

  onSubmit = (e) => {
    let formData = '';
    for (const key in this.state.data) {
      if (this.state.data[key]) {
        formData += `${key}=${this.state.data[key]}&`;
      }
    }
    formData += `tripCost=${this.state.tripCost.min}-${this.state.tripCost.max}`;
    this.props.handleSearchSubmit(formData);
    e.preventDefault();
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container col-sm-6">
        <form className="searchForm" onSubmit={this.onSubmit}>
          <FormGroup for="name" type="text" id="name" placeholder="Enter trip name here.." name="name" label="Trip name" value={data.name} onChange={this.onChange} />
          <InputRange maxValue={1000} minValue={0} value={this.state.tripCost} formatLabel={tripCost => `${tripCost}$`} onChange={tripCost => this.setState({ tripCost })} />
          <Button color="info" onClick={this.toggle} style={{ marginBottom: '1rem' }}>
            More options
          </Button>
          <Collapse isOpen={this.state.collapse}>
            <FormGroupDate for="dateStart" label="Date trip starts" id="dateStart" name="dateStart" value={data.dateStart} onChange={this.onChange} />
            <FormGroupDate for="dateEnd" label="Date trip ends" id="dateEnd" name="dateEnd" value={data.dateEnd} onChange={this.onChange} />
            <FormGroup for="locationStart" type="text" id="locationStart" placeholder="Where trip starts?" name="locationStart" label="Start location" value={data.locationStart} onChange={this.onChange} />
            <FormGroup for="locationEnd" type="text" id="locationEnd" placeholder="Where trip ends?" name="locationEnd" label="End location" value={data.locationEnd} onChange={this.onChange} />
          </Collapse>
          <Button className="float-right" type="submit" color="primary" style={{ marginBottom: '1rem' }}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default TripsSearchForm;
