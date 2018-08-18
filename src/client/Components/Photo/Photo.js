import React, { Component } from 'react';
import FormGroup from '../FormGroup/FormGroup';
import './Photo.css';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.props.photo);
  };

  handleChange = (event) => {
    const { files } = event.target;
    this.props.photoChange(files[0]);
  };

  render() {
    return (
      <div className="container col-sm-6">
        <form onSubmit={this.handleSubmit}>
          <FormGroup
            for="photo"
            type="file"
            id="photo"
            name="photo"
            label="Photo"
            // value={photo}
            onChange={this.handleChange}
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
