import { Route, Switch } from "react-router";

import Room from "./ChatRoom/Room";
import SignInForm from "./signIn/SignInForm";
import SignUpForm from "./signUp/SignUpForm";
import Home from "./Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/signup">
        <SignUpForm />
      </Route>
      <Route path="/signin">
        <SignInForm />
      </Route>
      <Route path="/chatroom">
        <Room />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};
export default Routes;
