import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartupScreen from './screens/StartupScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import CholeScreen from './screens/Chole';
import PizzaScreen from './screens/Pizza';
import CakeScreen from './screens/Cake';
import IceCreamScreen from './screens/IceCream';
import KajjuScreen from './screens/Kajju';
import LadduScreen from './screens/Laddu';
import AppNavigator from './screens/AppNavigator';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
     
      <Stack.Navigator>
        <Stack.Screen name="Startup" component={StartupScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="App" component={AppNavigator} /> 
        <Stack.Screen name="Chole" component={CholeScreen} />
        <Stack.Screen name="Pizza" component={PizzaScreen} />
        <Stack.Screen name="Cake" component={CakeScreen} />
        <Stack.Screen name="IceCream" component={IceCreamScreen} />
        <Stack.Screen name="Kajju" component={KajjuScreen} />
        <Stack.Screen name="Laddu" component={LadduScreen} />
        
      </Stack.Navigator>
     

    </NavigationContainer>
  );
};

export default App;

