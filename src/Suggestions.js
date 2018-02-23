import React, { Component } from 'react';
import { Layout, Card, FormLayout, TextField, DatePicker, Button } from '@shopify/polaris';

import '@shopify/polaris/styles.css';
import './App.css';

class Suggestions extends Component {
  state = {
    suggestions: []
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.keyword !== this.props.keyword) {
      fetch(`https://api.skypicker.com/locations/?term=${nextProps.keyword}&v=2&locale=en-US`)
        .then(res => res.json())
        .then(res => this.setState({ suggestions: res.locations }))
        .catch(e => console.error(e));
    }
  }

  render() {
    const suggestionList = this.state.suggestions.map(x => <div>{x.name}</div>);

    return <div>{suggestionList}</div>;
  }
}

export default Suggestions;
