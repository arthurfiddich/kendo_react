import React, { Component } from 'react'
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import TableHeader from './common/tableHeader';

class TicketsTable extends Component {
    // columns = [
    //     { path: "ticketId", label: "Ticket ID" },
    //     { path: "product", label: "Product" },
    //     { path: "status", label: "Status" },
    //     { path: "openDate", label: "Open Date" },
    //     { path: "messages", label: "Messages" },
    //     { path: "progress", label: "Progress" },
    //     { path: "payment", label: "Payment" },
    //     { path: "estimation", label: "Estimation" },
    //     { path: "techClose", label: "Tech Close" },
    //     { path: "closeDate", label: "Close Date" },
    //     { path: "rating", label: "Rating" },
    //     { path: "actions", label: "Actions" },
    // ];

    constructor(props) {
        super(props);
        this.state = {
            data: this.createRandomData(50),
            skip: 0
        };
        this.pageChange = this.pageChange.bind(this);
    }

    pageChange(event) {
        this.setState({
            orders: this.state.orders,
            skip: event.page.skip
        });
    }

    /* Generating example data */
    createRandomData(count) {
        const firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne', 'Nige'],
            lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan', 'Suyama', 'King', 'Callahan', 'Dodsworth', 'White'],
            cities = ['Seattle', 'Tacoma', 'Kirkland', 'Redmond', 'London', 'Philadelphia', 'New York', 'Seattle', 'London', 'Boston'],
            titles = ['Accountant', 'Vice President, Sales', 'Sales Representative', 'Technical Support', 'Sales Manager', 'Web Designer',
                'Software Developer'];

        return Array(count).fill({}).map((_, idx) => ({
            id: idx + 1,
            firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
            lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
            city: cities[Math.floor(Math.random() * cities.length)],
            title: titles[Math.floor(Math.random() * titles.length)]
        }));
    }
    render() {
        const { data, skip } = this.state;
        console.log('Columns: ', this.columns);
        return (
            <Grid
                style={{ height: '440px' }}
                rowHeight={40}
                data={data.slice(skip, skip + 20)}
                pageSize={20}
                total={data.length}
                skip={skip}

                scrollable={'virtual'}
                onPageChange={this.pageChange}
            >
                <Column field="id" title="ID" width="70px" />
                <Column field="firstName" title="First Name" />
                <Column field="lastName" title="Last Name" />
                <Column field="city" title="City" width="120px" />
                <Column field="title" title="Title" width="200px" />
            </Grid>
        );
    }
}

export default TicketsTable;