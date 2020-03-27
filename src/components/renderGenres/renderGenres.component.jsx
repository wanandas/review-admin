import React from "react";
import { Field } from "redux-form";
import renderField from "../renderField/renderField.component";

const renderGenres = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>
        Add Genres
      </button>
    </li>
    {fields.map((genres, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Genres"
          onClick={() => fields.remove(index)}
        >
          Remove
        </button>
        <Field
          name={genres}
          type="text"
          component={renderField}
          label={`Genres #${index + 1}`}
        />
      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>
);

export default renderGenres;
