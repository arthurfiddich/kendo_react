import * as React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import LoginForm from './components/loginForm';
import Logout from './components/logout';
import NotFound from './components/notFound';
import ServiceERP from './components/serviceErp';
import auth from "./services/authService";
import ProtectedRoute from './components/protectedRoute';

class App extends React.Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/serviceErp" component={ServiceERP} user={user} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/login" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
