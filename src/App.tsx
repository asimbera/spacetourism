import { AnimatePresence } from 'framer-motion';
import { Redirect, Route, Switch } from 'react-router-dom';
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Home from './pages/Home';
import Header from './partials/Header';

function App() {
  return (
    <div>
      <Header />
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch key={location.pathname} location={location}>
              <Route path='/home' component={Home} />
              <Route path='/dest' component={Destination} />
              <Route path='/crew' component={Crew} />
              <Redirect to='/home' from='/' exact />
            </Switch>
          </AnimatePresence>
        )}
      />
    </div>
  );
}

export default App;
