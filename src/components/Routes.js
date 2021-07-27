import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import MessageList from "./ChatRoom/messages/MessageList";
import Room from "./ChatRoom/Room";

const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <Room />
      </Route>
    </Switch>
  );
};
export default Routes;