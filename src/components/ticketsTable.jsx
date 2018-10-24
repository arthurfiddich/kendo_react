import React, { Component } from 'react'
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import TableHeader from './common/tableHeader';

class TicketsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.createRandomData(5000),
            skip: 0,
            take: 10
        };
        this.pageChange = this.pageChange.bind(this);
    }

    pageChange(event) {
        console.log("Event: ", event);
        this.setState({
            skip: event.page.skip,
            take: event.page.take
        });
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
        const { data, skip, take } = this.state;
        console.log('Columns: ', this.columns);
        return (
            // scrollable={'virtual'}
            <Grid
                style={{ height: '600px' }}
                rowHeight={40}
                data={data.slice(skip, take + skip)}
                pageSize={20}
                total={data.length}
                skip={skip}
                take={take}
                pageable={true}
                onPageChange={this.pageChange}
            >
                <Column field="ticketId" title="Ticket ID" />
                <Column field="product" title="Product" />
                <Column field="status" title="Status" />
                <Column field="openDate" title="Open Date" />
                <Column field="messages" title="Messages" />
                <Column field="progress" title="Progress" />
                <Column field="payment" title="Payment" />
                <Column field="estimation" title="Estimation" />
                <Column field="techClose" title="Tech Close" />
                <Column field="closeDate" title="Close Date" />
                <Column field="rating" title="Rating" />
                <Column field="actions" title="Actions" />
            </Grid>
        );
    }
}

export default TicketsTable;