import React from "react";
import "./createpage.styles.scss";
import renderGenres from "../../components/renderGenres/renderGenres.component";
import { FieldArray, reduxForm, Field } from "redux-form";
import renderField from "../../components/renderField/renderField.component";
import renderComment from "../../components/renderComment/renderComment.component";
import renderReason from "../../components/renderReason/render-reason.component";

const Createpage = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <div className="container">
      <form id="contact" onSubmit={handleSubmit}>
        <h3>Create Animate Review</h3>
        <h4>Review</h4>
        <Field
          name="name"
          type="text"
          component={renderField}
          label="AnimeName"
        />

        <Field
          name="logline"
          type="text"
          component={renderField}
          label="Logline"
        />
        <Field
          name="img"
          type="text"
          component={renderField}
          label="PhotoLink"
        />
        <Field
          name="score"
          type="number"
          component={renderField}
          label="Score"
        />

        <Field
          name="comment"
          type="text"
          multiline="true"
          margin="normal"
          component={renderComment}
          label="Comment"
        />

        <Field
          name="reviewer"
          type="text"
          component={renderField}
          label="Reviewer"
        />
        <div className="btn-array">
          <FieldArray name={`genres`} component={renderGenres} />
          <FieldArray name={`reason`} component={renderReason} />
        </div>

        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            disabled={submitting}
          >
            Submit
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default reduxForm({ form: "fieldArrays" })(Createpage);
