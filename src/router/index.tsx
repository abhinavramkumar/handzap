import * as React from 'react';
import {Router, Switch, Route} from 'react-router';
import Header from '../components/Header';
import Page from '../screens/Page';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

interface IProps {}

const AppRouter = (props: IProps) => (
  <Router history={history}>
    <div className="Page">
      <Header />
      <Switch>
        <Route to="/" component={Page} exact={true} />
        <Route to="/page/:number" component={Page} exact={true} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
