import React, { Component } from 'react';
import NavBar from "./navbar";
import auth from "../services/authService";

class ServiceERP extends Component {

    render() {
        return <React.Fragment>
            <NavBar user={auth.getCurrentUser()} />
            <h1>Hello, welcome to the Landing Page!</h1>
        </React.Fragment>;
    }
}

export default ServiceERP;