import React from 'react';
import {
  FormGroup, Label, Input,
} from 'reactstrap';

const FormGroupDate = props => (

  <FormGroup>
    <Label htmlFor={props.for}>
      {props.label}
    </Label>
    <Input
      type="date"
      id={props.id}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  </FormGroup>
);

export default FormGroupDate;

