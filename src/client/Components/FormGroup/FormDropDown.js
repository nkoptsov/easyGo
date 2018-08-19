import React from 'react';
import {
  FormGroup, Label, Input,
} from 'reactstrap';

const FormDropDown = props => (

  <FormGroup>
    <Label htmlFor={props.for}>
      {props.label}
    </Label>
    <Input type="select" id={props.id} name={props.name} value={props.value} onChange={props.onChange}>
      <option>
            male
      </option>
      <option>
            female
      </option>
    </Input>
  </FormGroup>
);

export default FormDropDown;
