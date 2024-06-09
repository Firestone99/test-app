import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Home';
import DemoScreen from './Demo';
import BuyProScreen from './BuyPro';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Demo" component={DemoScreen} />
        <Drawer.Screen name="Buy Pro" component={BuyProScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
