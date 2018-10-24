import React, { Component } from 'react';
import NavBar from "./navbar";
import auth from "../services/authService";
import TicketsTable from './ticketsTable';
import Footer from './common/footer';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

class Tickets extends Component {
    state = {
        data: []
    };
    render() {
        const { data } = this.state;
        return <div>
            <NavBar user={auth.getCurrentUser()} />
            <div className="row">
                <TicketsTable data={data} />
            </div>
            <Footer />
        </div>
    }
}

export default Tickets;