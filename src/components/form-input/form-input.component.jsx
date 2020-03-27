import React from "react";

import { TextInput } from "grommet";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div>
    <TextInput onChange={handleChange} {...otherProps} />
  </div>
);

export default FormInput;
