import React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup, Label, Input,
} from 'reactstrap';

const FormGroupProfile = React.forwardRef((props, ref) => {
  const {
    htmlFor, type, className, id, placeholder,
    name, defaultValue, label,
  } = props;
  return (
    <FormGroup>
      <Label htmlFor={htmlFor}>
        {label}
      </Label>
      <Input
        type={type}
        className={className}
        id={id}
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
        ref={ref}
      />
    </FormGroup>
  );
});

FormGroupProfile.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
};

export default FormGroupProfile;
