import React from 'react';
import {
  FormGroup, Label, Input,
} from 'reactstrap';

const FormsGroup = props => (

  <FormGroup>
    <Label htmlFor={props.for}>
      {props.label}
    </Label>
    <Input
      type={props.type}
      className="form-control"
      id={props.id}
      placeholder={props.placeholder}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  </FormGroup>
);

export default FormsGroup;
