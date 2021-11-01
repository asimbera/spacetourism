import { Redirect, Route, Switch } from 'react-router-dom';
import Destination from './pages/Destination';
import Home from './pages/Home';
import Header from './partials/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/dest'>
          <Destination />
        </Route>
        <Redirect to='/home' from='/' exact />
      </Switch>
    </div>
  );
}

export default App;
