import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Repositories from './pages/Repositories';
import Followers from './pages/Followers';
import Following from './pages/Following';
import NotFound from './pages/NotFound';

import NavegationTop from './components/NavegationTop/index';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/repositories" exact>
          <Repositories />
        </Route>
        <Route path="/followers" exact>
          <Followers />
        </Route>
        <Route path="/following" exact>
          <Following />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
