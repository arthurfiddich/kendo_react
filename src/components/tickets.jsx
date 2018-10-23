import React, { Component } from 'react';
import NavBar from "./navbar";
import auth from "../services/authService";
import TicketsTable from './ticketsTable';

class Tickets extends Component {
    state = {
        data: []
    };
    render() {
        const { data } = this.state;
        return <React.Fragment>
            <NavBar user={auth.getCurrentUser()} />
            <div className="row">
                <TicketsTable data={data} />
            </div>
        </React.Fragment>
    }
}

export default Tickets;