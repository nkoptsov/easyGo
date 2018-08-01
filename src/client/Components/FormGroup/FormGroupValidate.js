import React from 'react';

const FormGroupValidate = props => (
  <div className="form-group">
    <label htmlFor={props.for}>{props.label}</label>
    <input 
      type={props.type} 
      className={props.className} 
      id={props.id} 
      placeholder={props.placeholder} 
      name={props.name} 
      value={props.value} 
      onChange={props.onChange}/>
  </div>
);

export default FormGroupValidate;