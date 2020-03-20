import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import Loginpage from "./pages/login/loginpage.component";
import PrivateRoute from "./utils/privateRoute/priteRoute.component";

import Createpage from "./pages/create/createpage.component";
import Editpage from "./pages/edit/editpage.component";
import Homepage from "./pages/home/homepage.component";

import addDoctoFirebase from "./redux/addDoctoFirebase";

function App() {
  const state = {
    loggedIn: true
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Loginpage} />

        <PrivateRoute
          isLoggedIn={state.loggedIn}
          path="/edit"
          component={Editpage}
        />
        <PrivateRoute isLoggedIn={state.loggedIn} path="/create">
          <Createpage onSubmit={addDoctoFirebase} />
        </PrivateRoute>
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
}

export default App;
