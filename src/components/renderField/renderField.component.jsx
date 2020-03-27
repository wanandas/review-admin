import React from "react";
import { TextInput } from "grommet";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <TextInput {...input} type={type} placeholder={label} required />
    {touched && error && <span>{error}</span>}
  </div>
);

export default renderField;
