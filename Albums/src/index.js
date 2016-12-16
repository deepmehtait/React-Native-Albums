// Import React Native Libraries
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './components/header';
// Create Component
const App = () => (
  <Header headerText={'Albums'} />
);


// Render it to the device

AppRegistry.registerComponent('Albums', () => App);
