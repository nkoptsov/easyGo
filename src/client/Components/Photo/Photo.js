import React, { Component } from 'react';
import FormGroup from '../FormGroup/FormGroup';
import './Photo.css';
import FormGroupProfile from '../FormGroup/FormGroupProfile';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.photo = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.props.photo)
    // this.props.handleSubmit(this.photo.current.files[0]);
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
            htmlFor="photo"
            type="file"
            id="photo"
            name="photo"
            label="Photo: "
            className="form-control"
            onChange={this.handleChange}
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
