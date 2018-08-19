import React from 'react';
import PropTypes from 'prop-types';

const FormDropDown = React.forwardRef((props, ref) => {
  const {
    id, name, defaultValue, label, htmlFor, className, type,
  } = props;
  return (
    <div className="form-group">
      <label htmlFor={htmlFor}>
        {label}
      </label>
      <select
        type={type}
        className={className}
        id={id}
        name={name}
        defaultValue={defaultValue}
        ref={ref}
      >
        <option value="male">
          Male
        </option>
        <option value="female">
          Female
        </option>
      </select>
    </div>
  );
});

FormDropDown.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

export default FormDropDown;
