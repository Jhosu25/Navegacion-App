import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native'
import { StackNavigator } from './src/navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  )
}

export default App;