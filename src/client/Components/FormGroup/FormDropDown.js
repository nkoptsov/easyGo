import React from 'react';

const FormDropDown = props => (
  <div className="form-group">
    <label htmlFor={props.for}>
      {props.label}
    </label>
    <select className="form-control" id={props.id} name={props.name} value={props.value} onChange={props.onChange}>
      <option selected>
Select your gender
      </option>
      <option value="male">
        Male
      </option>
      <option value="female">
        Female
      </option>
    </select>
  </div>
);

export default FormDropDown;
