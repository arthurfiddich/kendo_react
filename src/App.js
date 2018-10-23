import * as React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import LoginForm from './components/loginForm';

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
