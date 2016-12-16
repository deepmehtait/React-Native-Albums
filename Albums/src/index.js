// Import React Native Libraries
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumList';
// Create Component
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);


// Render it to the device

AppRegistry.registerComponent('Albums', () => App);
