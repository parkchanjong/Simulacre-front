import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from '../Routes/Auth';
import Feed from '../Routes/Feed';
import Explore from '../Routes/Explore';
import Search from '../Routes/Search';
import Profile from '../Routes/Profile';
import EditProfile from '../Routes/EditProfile';

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Explore} />
    <Route path="/Feed" component={Feed} />
    <Route path="/search" component={Search} />
    <Route path="/EditProfile" component={EditProfile} />
    <Route path="/:username" component={Profile} />
    <Redirect from="*" to="/" />
  </Switch>
);

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Redirect from="*" to="/" />
  </Switch>
);

const AppRouter = ({ isLoggedIn }) =>
  isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppRouter;
