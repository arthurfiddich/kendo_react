import * as React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import LoginForm from './components/loginForm';
import Logout from './components/logout';
import NotFound from './components/notFound';
import ServiceERP from './components/serviceErp';
import ProtectedRoute from './components/protectedRoute';
import Tickets from './components/tickets';
import Team from './components/team';

class App extends React.Component {
  render() {
    return (
      <div>
        <main>
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/serviceErp" component={ServiceERP} />
            <ProtectedRoute path="/tickets" component={Tickets} />
            <ProtectedRoute path="/team" component={Team} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/login" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
