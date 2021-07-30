import { Route, Switch } from "react-router";
//components
import Room from "./ChatRoom/Room";
import SignInForm from "./signIn/SignInForm";
import SignUpForm from "./signUp/SignUpForm";
import Home from "./Home";
import ChatList from "./ChatRoom/sideBarContact/ChatList";
import FullPage from "./FullPage/FullPage";
import CreateNewChat from "./ChatRoom/sideBarContact/CreateNewChat";
import BackGroundColor from "./ChatRoom/sideBarContact/BackGroungColor";

const Routes = () => {
  return (
    <Switch>
      <Route path="/signup">
        <SignUpForm />
      </Route>
      <Route path="/signin">
        <SignInForm />
      </Route>
      {/* <Route path="/chatroom">
        <Room />
      </Route> */}
      <Route path="/newchat">
        <CreateNewChat />
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
