import React from 'react';
import PropTypes from 'prop-types';

const FormGroupTrip = React.forwardRef((props, ref) => {
  const {
    htmlFor, type, className, id, placeholder,
    name, defaultValue, label,
  } = props;
  return (
    <div className="form-group">
      <label htmlFor={htmlFor}>
        {label}
      </label>
      <input
        type={type}
        className={className}
        id={id}
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
        ref={ref}
      />
    </div>
  );
});

FormGroupTrip.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // value: PropTypes.string.isRequired,
  // onChange: PropTypes.func.isRequired,
};

export default FormGroupTrip;
