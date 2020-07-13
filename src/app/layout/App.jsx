import React, {Component, Fragment}from 'react';
import {Container} from 'semantic-ui-react';
import { Route } from 'react-router';
import Events from './Events';

export default function App() {
  return (
    <Container maxWidth="sm">
        <Events/>
    </Container>
  );
}
