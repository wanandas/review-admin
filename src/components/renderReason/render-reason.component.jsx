import React from "react";
import { Field } from "redux-form";
import renderField from "../renderField/renderField.component";
import renderComment from "../renderComment/renderComment.component";

const renderReason = ({ fields, meta: { touched, error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add Reason
      </button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {fields.map((reason, index) => (
      <li key={index}>
        <h4>Reason #{index + 1}</h4>
        <Field
          name={`${reason}.reasonname`}
          type="text"
          component={renderComment}
          label="Why"
        />
        <Field
          name={`${reason}.reasonscore`}
          type="number"
          component={renderField}
          label="Score"
        />
        <button
          type="button"
          title="Remove Reason"
          onClick={() => fields.remove(index)}
        >
          remove
        </button>
      </li>
    ))}
  </ul>
);

export default renderReason;
