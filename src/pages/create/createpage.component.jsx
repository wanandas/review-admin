import React from "react";
import "./createpage.styles.scss";
import renderGenres from "../../components/renderGenres/renderGenres.component";
import { FieldArray, reduxForm, Field } from "redux-form";
import renderField from "../../components/renderField/renderField.component";
import renderComment from "../../components/renderComment/renderComment.component";
import renderReason from "../../components/renderReason/render-reason.component";
import { List } from "../../components/listitem/list";
import { Grommet, Heading, Box, Button } from "grommet";

const Createpage = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <Grommet className="container">
      <form id="contact" onSubmit={handleSubmit}>
        <Box align="center" pad="small">
          <Heading level="2">Create Animate Review</Heading>
          <Heading level="4">Review</Heading>
        </Box>
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
        <List>
          <FieldArray name={`genres`} component={renderGenres} />
          <FieldArray name={`reason`} component={renderReason} />
        </List>

        <Button name="submit" type="submit" disabled={submitting}>
          Submit
        </Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </form>
    </Grommet>
  );
};

export default reduxForm({ form: "fieldArrays" })(Createpage);
