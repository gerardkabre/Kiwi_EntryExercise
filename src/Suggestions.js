import React, { Component } from 'react';
import { Layout, Card, FormLayout, TextField, DatePicker, Button } from '@shopify/polaris';

import '@shopify/polaris/styles.css';
import './App.css';

class Suggestions extends Component {
  state = {
    suggestions: [],
    showFrom: true,
    showTo: true
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
    const { fromComponent, toComponent, selectFrom, selectTo } = this.props;
    const { showFrom, showTo, suggestions } = this.state;

    if (fromComponent && showFrom) {
      return suggestions.map(suggestion => (
        <div
          className="suggestion"
          onClick={() => {
            selectFrom(suggestion.name);
            this.setState({ showFrom: false });
          }}
        >
          {suggestion.name}
        </div>
      ));
    } else {
      if (toComponent && showTo) {
        return suggestions.map(suggestion => (
          <div
            className="suggestion"
            onClick={() => {
              selectTo(suggestion.name);
              this.setState({ showTo: false });
            }}
          >
            {suggestion.name}
          </div>
        ));
      } else {
        return null;
      }
    }
  }
}

export default Suggestions;
