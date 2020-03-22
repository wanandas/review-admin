import React, { useState } from "react";
import { connect } from "react-redux";

import "./loginpage.styles.scss";
import FormInput from "../../components/form-input/form-input.component";

import { signInStart } from "../../redux/admin/admin.action";

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
    <div className="sign-in">
      <h2>For Admin</h2>

      <form onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signInStart: (email, password) => dispatch(signInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(Loginpage);
