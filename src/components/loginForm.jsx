import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    console.log("In Do Submit Method: ");
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/serviceErp";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        const { data } = ex.response;
        errors[data.field] = data.message;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/serviceErp" />;
    return (
      <div className="row example-wrapper">
        <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
          <div className="card">
            <div className="card-block">
              <form className="k-form" onSubmit={this.handleSubmit}>
                <fieldset>
                  <legend>Login Form:</legend>
                  {this.rendetInput("username", "Username")}
                  {this.rendetInput("password", "Password", "password")}
                </fieldset>
                {this.renderButton("Login")}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
