import { Route, Switch } from "react-router";

import Room from "./ChatRoom/Room";
import SignInForm from "./signIn/SignInForm";
import SignUpForm from "./signUp/SignUpForm";

const Routes = () => {
  return (
    <Switch>
      <Route path="/signup">
        <SignUpForm />
      </Route>
      <Route path="/signin">
        <SignInForm />
      </Route>
      <Route path="/">
        <Room />
      </Route>
    </Switch>
  );
};
export default Routes;
