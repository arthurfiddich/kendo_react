import React, { Component } from 'react';
import NavBar from "./navbar";
import auth from "../services/authService";

class Team extends Component {
    render() {
        return <React.Fragment>
            <NavBar user={auth.getCurrentUser()} />
            <h1>Welcome To Team Component!</h1>
        </React.Fragment>
    }
}

export default Team;