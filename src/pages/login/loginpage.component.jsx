import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../../components/form-input/form-input.component";

import { signInStart } from "../../redux/admin/admin.action";
import { Grommet, Button, Heading, Box, Form } from "grommet";
import myTheme from "../../components/theme/mytheme";

const Loginpage = ({ signInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    signInStart(email, password);
  };
  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Grommet theme={myTheme}>
      <Box align="center">
        <Heading level="2">For Admin</Heading>

        <Form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            handleChange={handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={handleChange}
            label="password"
            required
          />
          <Button type="submit" label="submit" color="#eee" />
        </Form>
      </Box>
    </Grommet>
  );
};

const mapDispatchToProps = dispatch => ({
  signInStart: (email, password) => dispatch(signInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(Loginpage);
