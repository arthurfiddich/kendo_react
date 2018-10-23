import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
    renderCell = (item, column) => {
        if (column.content) {
            return column.content(item);
        } else {
            return _.get(item, column.path);
        }
    };
    createKey = (itemKey, path) => {
        return itemKey + path;
    };
    render() {
        const { data, columns, valueProperty } = this.props;
        return (
            <tbody>
                {data.map(item => (
                    <tr key={item[valueProperty]}>
                        {columns.map(column => (
                            <td key={this.createKey(item[valueProperty], column.path)}>
                                {this.renderCell(item, column)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        );
    }
}

TableBody.defaultProps = {
    valueProperty: "_id"
};

export default TableBody;
