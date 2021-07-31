import { Route, Switch } from "react-router";
//components
import SignInForm from "./signIn/SignInForm";
import SignUpForm from "./signUp/SignUpForm";
import Home from "./Home";
import FullPage from "./FullPage/FullPage";
import NewChatFullPage from "./FullPage/NewChatFullPage";
import SettingsFullPage from "./FullPage/SettingsFullPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/signup">
        <SignUpForm />
      </Route>
      <Route path="/signin">
        <SignInForm />
      </Route>
      <Route path="/profile-settings">
        <SettingsFullPage />
      </Route>
      <Route path="/newchat">
        <NewChatFullPage />
      </Route>
      <Route path="/room">
        <FullPage />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};
export default Routes;
