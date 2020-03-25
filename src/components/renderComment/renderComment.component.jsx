import React from "react";

const renderComment = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea {...input} type={type} placeholder={label} required />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default renderComment;
