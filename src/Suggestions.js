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
    if (this.props.fromComponent) {
      const suggestionList = this.state.suggestions.map(suggestion => (
        <li onClick={event => this.props.selectFrom(suggestion.name)}>{suggestion.name}</li>
      ));
      return suggestionList;
    } else {
      const suggestionList = this.state.suggestions.map(suggestion => (
        <li onClick={event => this.props.selectTo(suggestion.name)}>{suggestion.name}</li>
      ));
      return suggestionList;
    }
  }
}

export default Suggestions;
