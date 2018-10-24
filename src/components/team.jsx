import React, { Component } from 'react';
import NavBar from "./navbar";
import auth from "../services/authService";
import Footer from './common/footer';

class Team extends Component {
    render() {
        return (
            <div>
                <NavBar user={auth.getCurrentUser()} />
                <div className="row">
                    <h1>Welcome To Team Component!</h1>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Team;