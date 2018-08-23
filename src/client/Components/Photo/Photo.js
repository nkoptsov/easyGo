import React, { Component } from 'react';
// import FormGroup from '../FormGroup/FormGroup';
import './Photo.css';
import FormGroupProfile from '../FormGroup/FormGroupProfile';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.photo = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.photo.current.files[0]);
  };

  render() {
    return (
      <div className="container col-sm-6">
        <form onSubmit={this.handleSubmit}>
          <FormGroupProfile
            htmlFor="photo"
            type="file"
            id="photo"
            name="photo"
            label="Photo: "
            className="form-control"
            // onChange={this.handleChange}
            ref={this.photo}
          />
          <button type="submit" className="btn btn-primary">
            Upload
          </button>
        </form>
      </div>
    );
  }
}

export default Photo;
