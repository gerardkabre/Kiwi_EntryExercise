import React, { Component } from 'react';
import { Layout, Card, FormLayout, TextField, DatePicker, Button } from '@shopify/polaris';

import '@shopify/polaris/styles.css';
import './App.css';

class App extends Component {
  state = {
    from: '',
    to: ''
  };
  render() {
    return (
      <div className="App">
        <Layout>
          <Layout.AnnotatedSection title="Description" description="">
            <Card sectioned>
              Entry task for Kiwi from Gerard Cabrerizo. Using the Polaris components library from Shopify.
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            title="Flight details"
            description="Select where do you want to go, from where are you flying and your desired date to get the flight prices."
          >
            <Card sectioned>
              <FormLayout>
                <TextField label="From" value={this.state.from} placeholder="From where do you want to fly" />
                <TextField label="To" value={this.state.to} placeholder="Where do you want to go" />
                <DatePicker month={4} year={2017} />
                <Button primary>Get flights</Button>
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>

          <Layout.AnnotatedSection title="Results" description="Results from your search.">
            <Card sectioned />
          </Layout.AnnotatedSection>
        </Layout>
      </div>
    );
  }
}

export default App;
