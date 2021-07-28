import { Route, Switch } from "react-router";

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
