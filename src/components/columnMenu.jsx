import React, { Component } from 'react';
import {
    GridColumnMenuSort,
    GridColumnMenuFilter
} from '@progress/kendo-react-grid';

class ColumnMenu extends Component {
    render() {
        return (
            <div>
                <GridColumnMenuSort {...this.props} />
                <GridColumnMenuFilter {...this.props} />
            </div>);
    }
}

export default ColumnMenu;