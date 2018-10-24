import React, { Component } from 'react';
import NavBar from "./navbar";
import auth from "../services/authService";

class ServiceERP extends Component {

    render() {
        return <div>
            <NavBar user={auth.getCurrentUser()} />
            <h1>Hello, welcome to the Landing Page!</h1>
        </div>;
    }
}

export default ServiceERP;