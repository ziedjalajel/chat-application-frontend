
import { Route, Switch } from 'react-router';
import BackGround from './components/BackGround';
import Room from './components/ChatRoom/Room';

function App() {
  return (
    <>
    <Switch>
    <Route path="/">
              <Room />
     </Route>
     </Switch>
     </>
  );
}

export default App;
