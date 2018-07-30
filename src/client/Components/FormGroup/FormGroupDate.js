import React from 'react';

const FormGroupDate = props => (
  <div className="form-group row">
    <label htmlFor={props.for} className="col-2 col-form-label">{props.label}</label>
    <div className="col-10">
        <input className="form-control" type="date" value="1982-01-01" id={props.id} name={props.name} value={props.value} onChange={props.onChange} />
    </div>
  </div>
);

export default FormGroupDate;
