import React, { Component } from 'react';
import { Button } from '@shopify/polaris';

import './App.css';

class Pagination extends Component {
  state = {
    lastFlightIndex: -1,
    maxFlightIndex: 5
  };

  nextFlights() {
    this.setState({
      lastFlightIndex: this.state.lastFlightIndex + 5,
      maxFlightIndex: this.state.maxFlightIndex + 5
    });
  }
  previousFlights() {
    this.setState({
      lastFlightIndex: this.state.lastFlightIndex - 5,
      maxFlightIndex: this.state.maxFlightIndex - 5
    });
  }
  render() {
    const newList = this.props.list.filter(
      (flight, index) => index > this.state.lastFlightIndex && index < this.state.maxFlightIndex
    );
    return (
      <div>
        {newList}
        <div style={{ 'marginTop': 10 }}>
          <Button primary onClick={this.nextFlights.bind(this)}> Next 5 flights</Button>
        </div>
        <div style={{ 'marginTop': 10 }}>
          <Button onClick={this.previousFlights.bind(this)}>Previous 5 flights</Button>
        </div>
      </div>
    );
  }
}
export default Pagination;
