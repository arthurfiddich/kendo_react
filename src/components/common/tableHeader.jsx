import React, { Component } from 'react'
import { GridColumn } from '@progress/kendo-react-grid';

class TableHeader extends Component {
    render() {
        console.log("Columns: ", this.props.columns);
        return (
            <div>
                {this.props.columns.map(column => (
                    <GridColumn
                        key={column.path}
                        field={column.path}
                        title={column.label} />
                ))
                }
            </div>
        );
    }
}

export default TableHeader;