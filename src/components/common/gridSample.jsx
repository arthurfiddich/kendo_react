import React, { Component } from 'react';
import { render } from 'react-dom';

import { Grid, GridColumn, GridDetailRow } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';

class CustomGridDetailRow extends GridDetailRow {
    render() {
        return (
            <div>
                List of friends
        <Grid scrollable="none" data={this.props.dataItem.friends}>
                    <GridColumn field="id" title="ID" width="70px" />
                    <GridColumn field="firstName" title="First Name" />
                    <GridColumn field="lastName" title="Last Name" />
                </Grid>
            </div>
        );
    }
}

class App extends React.Component {
    users = [];
    constructor(props) {
        super(props);
        this.users = this.createRandomData(10000);
        this.dataStateChange = this.dataStateChange.bind(this);
        this.expandChange = this.expandChange.bind(this);
        this.state = this.createState({ skip: 0, take: 20 });
    }

    expandChange(event) {
        this.users[event.dataItem.id - 1].expanded = !this.users[event.dataItem.id - 1].expanded;
        if (!this.users[event.dataItem.id - 1].friends) {
            this.users[event.dataItem.id - 1].friends = this.generateRandomFriends(this.users.length);
        }
        this.setState(this.state);
    }

    createState(dataState) {
        return {
            dataState: dataState
        };
    }

    dataStateChange(event) {
        this.setState(this.createState(event.data));
    }

    render() {
        const result = process(this.users, this.state.dataState);
        return (
            <Grid
                style={{ height: '450px' }}
                pageSize={20}
                filterable={true}
                scrollable={'virtual'}
                expandField="expanded"
                detail={CustomGridDetailRow}

                data={result.data}
                total={result.total}
                filter={this.state.dataState.filter}
                skip={this.state.dataState.skip}

                expandChange={this.expandChange}
                dataStateChange={this.dataStateChange}
                resizable={true}
            >
                <GridColumn field="id" title="ID" filterable={false} width="70px" />
                <GridColumn field="firstName" width="120px" title="First Name" />
                <GridColumn field="lastName" width="120px" title="Last Name" />
                <GridColumn field="city" title="City" width="120px" />
                <GridColumn field="title" title="Title" width="200px" />
            </Grid>
        );
    }

    /* Generating example data */
    createRandomData(count) {
        const firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne', 'Nige'],
            lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan', 'Suyama', 'King', 'Callahan', 'Dodsworth', 'White'],
            cities = ['Seattle', 'Tacoma', 'Kirkland', 'Redmond', 'London', 'Philadelphia', 'New York', 'Seattle', 'London', 'Boston'],
            titles = ['Accountant', 'Sales Representative', 'Technical Support', 'Sales Manager', 'Web Designer', 'Software Developer'];

        return Array(count).fill({}).map((_, idx) => ({
            id: idx + 1,
            firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
            lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
            city: cities[Math.floor(Math.random() * cities.length)],
            title: titles[Math.floor(Math.random() * titles.length)],
            expanded: false
        }));
    }

    generateRandomFriends(maxId) {
        const count = 1 + Math.floor(Math.random() * 9);
        const friends = [];
        for (let i = 0; i < count; i++) {
            friends[i] = this.users[Math.floor(Math.random() * maxId)];
        }
        return friends;
    }
}

render(<App />, document.getElementById('root'));
