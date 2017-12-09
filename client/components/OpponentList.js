import React, { Component } from 'react';

class OpponentList extends Component {


  renderOpponents() {

    return this.props.opponents.map(({ id, content }) => {
      return (
        <li key={id} className="collection-item">
          {content}

        </li>
      );
    });
  }

  render() {
    return (
      <ul className="collection">
        {this.renderOpponents()}
      </ul>
    );
  }
}

export default OpponentList;
