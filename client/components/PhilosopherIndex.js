import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';


class PhilosopherList extends Component {
  renderPhilosophers() {
    return this.props.data.philosophers.map(philosopher => {
      return (
        <li key={philosopher.id} className="collection-item">
          {philosopher.name}
        </li>
      );
    });
  }
  render() {
    if (this.props.data.loading) { return <div>Loading...</div>; }
    return (
      <div>
        <ul className="collection">
          {this.renderPhilosophers()}
        </ul>
        <Link
          to="/philosophers/new"
          className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const query = gql`
  {
    philosophers {
      id
      name
    }
  }
`;

export default graphql(query)(PhilosopherList);
