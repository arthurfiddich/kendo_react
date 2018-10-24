import React, { Component } from 'react'
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';
import ColumnMenu from '../components/columnMenu';

class TicketsTable extends Component {
    constructor(props) {
        super(props);
        this.state = this.createDataState({
            take: 10,
            skip: 0
        });
    }

    createDataState(dataState) {
        const data = this.createRandomData(5000);
        return {
            result: process(data.slice(0), dataState),
            dataState: dataState
        };
    }

    dataStateChange = (event) => {
        this.setState(this.createDataState(event.data));
    }

    /* Generating example data */
    createRandomData(count) {
        const firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne', 'Nige'],
            lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan', 'Suyama', 'King', 'Callahan', 'Dodsworth', 'White'],
            cities = ['Seattle', 'Tacoma', 'Kirkland', 'Redmond', 'London', 'Philadelphia', 'New York', 'Seattle', 'London', 'Boston'],
            titles = ['Accountant', 'Vice President, Sales', 'Sales Representative', 'Technical Support', 'Sales Manager', 'Web Designer',
                'Software Developer'],
            statuses = ['Success', 'Failure'],
            openDates = ['2018-10-22', '2018-10-23', '2018-10-20', '2018-10-21', '2018-10-19', '2018-10-18'],
            progresses = ['Grooming', 'InProgress', 'Engineering Ready', 'QA', 'Engineering Done', 'Product Verification', 'Success'],
            payments = ['Paypal', 'Credit Card Payment', 'Debit Card Payment'],
            estimations = ['1Billion', '2Billion', '3Billion', '4Billion', '5Billion', '6Billion', '7Billion'],
            ratings = ['1Star', '2Star', '3Star', '4Star', '5Star'];


        return Array(count).fill({}).map((_, idx) => ({
            ticketId: idx + 1,
            product: firstNames[Math.floor(Math.random() * firstNames.length)],
            status: statuses[Math.floor(Math.random() * statuses.length)],
            openDate: openDates[Math.floor(Math.random() * openDates.length)],
            messages: titles[Math.floor(Math.random() * titles.length)],
            progress: progresses[Math.floor(Math.random() * progresses.length)],
            payment: payments[Math.floor(Math.random() * payments.length)],
            estimation: estimations[Math.floor(Math.random() * estimations.length)],
            techClose: lastNames[Math.floor(Math.random() * lastNames.length)],
            closeDate: openDates[Math.floor(Math.random() * openDates.length)],
            rating: ratings[Math.floor(Math.random() * ratings.length)],
            actions: cities[Math.floor(Math.random() * cities.length)],
        }));
    }
    render() {
        const { result, dataState } = this.state;
        console.log('Columns: ', this.columns);
        return (
            <Grid
                style={{ height: '600px', 'overflow-x': 'auto' }}
                data={result}
                {...dataState}
                onDataStateChange={this.dataStateChange}
                sortable={true}
                pageable={true}
                pageSize={8}
            >
                <Column field="ticketId" title="Ticket ID" width="125px" filter={'numeric'} columnMenu={ColumnMenu} />
                <Column field="product" title="Product" width="125px" columnMenu={ColumnMenu} />
                <Column field="status" title="Status" width="125px" columnMenu={ColumnMenu} />
                <Column field="openDate" title="Open Date" width="125px" filter={'date'} columnMenu={ColumnMenu} />
                <Column field="messages" title="Messages" width="125px" columnMenu={ColumnMenu} />
                <Column field="progress" title="Progress" width="125px" columnMenu={ColumnMenu} />
                <Column field="payment" title="Payment" width="125px" columnMenu={ColumnMenu} />
                <Column field="estimation" title="Estimation" width="125px" columnMenu={ColumnMenu} />
                <Column field="techClose" title="Tech Close" width="125px" columnMenu={ColumnMenu} />
                <Column field="closeDate" title="Close Date" width="125px" filter={'date'} columnMenu={ColumnMenu} />
                <Column field="rating" title="Rating" width="125px" columnMenu={ColumnMenu} />
                <Column field="actions" title="Actions" width="125px" columnMenu={ColumnMenu} />
            </Grid>
        );
    }
}

export default TicketsTable;