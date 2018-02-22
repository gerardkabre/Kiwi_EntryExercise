import React from 'react';
import { Card } from '@shopify/polaris';

const FlightItem = props => (
  <Card sectioned>
    <h1 className="flightList__title">Flight ID:</h1>
    {props.id}
    <h1 className="flightList__title">From:</h1>
    {props.from}
    <h1 className="flightList__title">To:</h1>
    {props.to}
    <h1 className="flightList__title">Duration:</h1>
    {props.duration}
    <h1 className="flightList__title">Price:</h1>
    {props.price}€
  </Card>
);

export default FlightItem;
