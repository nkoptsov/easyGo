import React, { Component }  from 'react';
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
        tripCost: '',
        keyWords: '',
      },
      errors: {}
    };
  }
  onChange = (e) => { 
    this.setState({data: { ...this.state.data, [e.target.name]: e.target.value } });
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.data)
  }

  render() {
    const { data } = this.state;
 
     return (
      <div className="container col-sm-6">
        <form className="searchForm" onSubmit={this.onSubmit}>
          <FormGroup for="name" type="text" id="name" placeholder="Enter trip name here.." name="name" label="Trip name" value={data.name} onChange={this.onChange} />
          <FormGroupDate for="dateStart" label="Date trip starts" id="dateStart" name="dateStart" value={data.dateStart} onChange={props.onChange} />
          <FormGroupDate for="dateEnd" label="Date trip ends" id="dateEnd" name="dateEnd" value={data.dateEnd} onChange={props.onChange} /> 
          <FormGroup for="locationStart" type="text" id="locationStart" placeholder="Where trip starts?" name="locationStart" label="Start location" value={data.locationStart} onChange={this.onChange} />
          <FormGroup for="locationEnd" type="text" id="locationEnd" placeholder="Where trip ends?" name="locationEnd" label="End location" value={data.locationEnd} onChange={this.onChange} />
          <FormGroup for="tripCost" type="number" id="tripCost" name="tripCost" label="Trip cost" value={data.tripCost} onChange={this.onChange} />
          <FormGroup for="userId" type="text" id="userId" name="userId"placeholder="Name of trip creator" label="Trip creator" value={data.userId} onChange={this.onChange} />
          <FormGroup for="keyWords" type="text" id="keyWords" placeholder="Search will match this words in trip describtion.." name="keyWords" label="Key words" value={data.keyWords} onChange={this.onChange} />
          <button className="btn btn-primary">Search</button>
        </form>
      </div>
     )
  }

}
export default TripsSearchForm;
