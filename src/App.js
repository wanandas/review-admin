import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/header/header.component";
import Loginpage from "./pages/login/loginpage.component";
import PrivateRoute from "./utils/privateRoute/priteRoute.component";

import Createpage from "./pages/create/createpage.component";
import Homepage from "./pages/home/homepage.component";

import { addDoctoFirebase } from "./firebase/firebase.utils";
import { checkUserSession } from "./redux/admin/admin.action";
import { selectCurrentUser } from "./redux/admin/admin.selection";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route
          exact
          path="/login"
          render={() => (currentUser ? <Redirect to="/" /> : <Loginpage />)}
        />

        <PrivateRoute isLoggedIn={currentUser} exact path="/">
          <Homepage />
        </PrivateRoute>

        <PrivateRoute isLoggedIn={currentUser} path="/create">
          <Createpage onSubmit={addDoctoFirebase} />
        </PrivateRoute>

        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
