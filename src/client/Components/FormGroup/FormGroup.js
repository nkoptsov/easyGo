import React from 'react';
import PropTypes from 'prop-types';

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
