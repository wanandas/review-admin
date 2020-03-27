import React from "react";
import { TextArea } from "grommet";

const renderComment = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <div>
      <TextArea {...input} type={type} placeholder={label} required />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default renderComment;
