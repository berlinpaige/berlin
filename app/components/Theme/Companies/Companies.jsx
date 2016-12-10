// Deps
import React from 'react';
import { Link } from 'react-router'
import { Table } from 'react-bootstrap'

// Modules

// Exports
export default class CompanyTableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.distance_cycled}</td>
        <td>{this.props.data.last_journey}</td>
      </tr>
    );
  }
}

export default class Companies extends React.Component {
  constructor(props) {
    super(props)
    this.tableHeadings
    this.state = {
      companies : []
    }
    this.txt = {
      title : 'Company List'
    }
  }
  componentDidMount() {
    this.serverRequest = $.get(this.props.source, function (result) {
      this.setState({
        companies: result.data
      })
    }.bind(this))
  }
  componentWillUnmount() {
    this.serverRequest.abort();
  }
  render() {
    return (
      <div>
        <h3>{this.txt.title}</h3>
        <Table responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Distance Cycled</th>
              <th>Last Journey</th>
            </tr>
          </thead>
          <tbody>
            {this.state.companies.map(function(result) {
               return <CompanyTableRow key={result.id} data={result}/>;
            })}
          </tbody>
        </Table>
      </div>
    )
  }
}
