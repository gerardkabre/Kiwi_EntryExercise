import React, { Component } from 'react';
import { Layout, Card, FormLayout, TextField, DatePicker, Button } from '@shopify/polaris';

import FlightItem from './FlightItem';
import Pagination from './Pagination';
import dateFormatter from './utils';

import '@shopify/polaris/styles.css';
import './App.css';

class App extends Component {
  state = {
    date: '',
    from: '',
    to: '',
    flights: []
  };

  handleSubmit = event => {
    event.preventDefault();
    const { from, to, date } = this.state;
    fetch(`https://api.skypicker.com/flights?flyFrom=${from}&to=${to}&dateFrom=${date}`)
      .then(res => res.json())
      .then(res => this.setState({ flights: res.data }))
      .catch(e => console.error(e));
  };
  render() {
    const flightList = this.state.flights.map(flight => (
      <FlightItem
        from={flight.mapIdfrom}
        to={flight.mapIdto}
        duration={flight.fly_duration}
        price={flight.conversion.EUR}
        id={flight.id}
        key={flight.id}
      />
    ));

    const SearchResults = (this.state.flights.length > 1)
    ? <Pagination list={flightList} />
    : <Card sectioned>Make a Search first</Card>;

    return (
      <div className="App">
        <Layout>
          <Layout.AnnotatedSection title="Description" description="">
            <Card sectioned>
              <p>Entry task for Kiwi from Gerard Cabrerizo.</p>
              <p> Using the Polaris components library from Shopify.</p>
            </Card>
          </Layout.AnnotatedSection>

          <Layout.AnnotatedSection
            title="Flight details"
            description="Select where do you want to go, from where are you flying and your desired date to get the flight prices."
          >
            <Card sectioned>
              <form onSubmit={this.handleSubmit}>
                <FormLayout>
                  <TextField
                    label="From"
                    placeholder="From where do you want to fly"
                    value={this.state.from}
                    onChange={value => this.setState({ from: value })}
                  />
                  <TextField
                    label="To"
                    placeholder="Where do you want to go"
                    value={this.state.to}
                    onChange={value => this.setState({ to: value })}
                  />
                  <DatePicker
                    month={1}
                    year={2018}
                    onChange={value => this.setState({ date: dateFormatter(value.start) })}
                  />
                  <Button primary={true} submit={true}>
                    Get flights
                  </Button>
                </FormLayout>
              </form>
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection title="Results" description="Results from your search.">
           {SearchResults}
          </Layout.AnnotatedSection>
        </Layout>
      </div>
    );
  }
}

export default App;
