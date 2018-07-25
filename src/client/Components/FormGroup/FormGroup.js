import React from 'react';

const FormGroup = (props) => (
  <div className="form-group">
    <label htmlFor={props.for}>{props.name}</label>
    <input type={props.type} className="form-control" id={props.id} placeholder={props.placeholder} />
  </div>
)

export default FormGroup;