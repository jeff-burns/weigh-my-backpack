import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import mapDispatchToProps from './actions/dispatcher';
import { ListItem } from '../common';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
        const { employees } = this.props;
        this.createDataSource({ employees });
    }

    componentWillReceiveProps(nextProps) {
        const { employees } = nextProps;
        this.createDataSource({ employees });
    }

    createDataSource = ({ employees }) => {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(employees);
    };

    renderRow = employee => <ListItem item={employee} />;

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => state.employees.list;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeList);
