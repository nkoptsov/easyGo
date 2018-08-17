import React from 'react';
import {
  FormGroup, Label, Input,
} from 'reactstrap';
import PropTypes from 'prop-types';

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
const FormGroupValidate = ({
  htmlFor,
  label,
  required,
  type,
  className,
  id,
  placeholder,
  name,
  value,
  onChange,
}) => (
  <div className="form-group">
    <label htmlFor={htmlFor}>
      {label}
      {required ? (
        <span className="red">
          *
        </span>
      ) : null}
      <input
        type={type}
        className={className}
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

export default FormsGroup;
FormGroupValidate.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormGroupValidate;
