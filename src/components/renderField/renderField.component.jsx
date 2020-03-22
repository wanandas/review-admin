import React from "react";

const renderField = ({
  input,
  label,
  type,
  classfield,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input
        {...input}
        type={type}
        placeholder={label}
        className={classfield}
      />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default renderField;
