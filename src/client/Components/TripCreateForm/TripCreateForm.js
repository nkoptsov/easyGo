import React from 'react';
import PropTypes from 'prop-types';
import FormGroupTrip from '../FormGroup/FormGroupTrip';


class TripCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.dateStart = React.createRef();
    this.dateEnd = React.createRef();
    this.locationStart = React.createRef();
    this.locationEnd = React.createRef();
    this.tripCost = React.createRef();
    this.description = React.createRef();
  }

  render() {
    return (
      <div className="container col-sm-6">
        <form>
          <FormGroupTrip
            className="form-control"
            htmlFor="name"
            type="text"
            id="name"
            placeholder="name"
            name="name"
            label="name"
            ref={this.name}
          />
          <FormGroupTrip
            className="form-control"
            htmlFor="dateStart"
            type="date"
            id="dateStart"
            placeholder="date start"
            name="dateStart"
            label="dateStart"
            ref={this.dateStart}
          />
          <FormGroupTrip
            className="form-control"
            htmlFor="dateEnd"
            type="date"
            id="dateEnd"
            placeholder="date end"
            name="dateEnd"
            label="dateEnd"
            ref={this.dateEnd}
          />
          <FormGroupTrip
            className="form-control"
            htmlFor="locationStart"
            type="text"
            id="locationStart"
            placeholder="location start"
            name="locationStart"
            label="locationStart"
            ref={this.locationStart}
          />
          <FormGroupTrip
            className="form-control"
            htmlFor="locationEnd"
            type="text"
            id="locationEnd"
            placeholder="location end"
            name="locationEnd"
            label="locationEnd"
            ref={this.locationEnd}
          />
          <FormGroupTrip
            className="form-control"
            htmlFor="tripCost"
            type="number"
            id="tripCost"
            placeholder="trip cost"
            name="tripCost"
            label="tripCost"
            ref={this.tripCost}
          />
          <FormGroupTrip
            className="form-control"
            htmlFor="description"
            type="textArea"
            id="description"
            placeholder="description"
            name="description"
            label="description"
            ref={this.description}
          />
          <button type="submit" className="btn btn-primary">
              Submit
          </button>
        </form>

      </div>

    );
  }
}

export default TripCreateForm;
