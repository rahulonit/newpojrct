<<<<<<< HEAD
// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './screens/SignUpScreen'; // Make sure the path matches your project structure
import HomeScreen from './screens/HomeScreen'; // Assuming you have a HomeScreen
=======
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Firstscr from "./screens/Firstscreen";
import Loginscr from "./screens/Loginscreen";
import Signupscr from "./screens/Signupscreen";
>>>>>>> 7b36a0b641a9ee0f376198d84547fcf6a4d7c537

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator initialRouteName="SignUpScreen">
        <Stack.Screen 
          name="SignUpScreen" 
          component={SignUpScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }}
        />
        {/* Add other screens as needed */}
=======
      <Stack.Navigator >
        <Stack.Screen name="Firstscreen" component={Firstscr} />
        <Stack.Screen name="Loginscreen" component={Loginscr} />
        <Stack.Screen name="Signupscreen" component={Signupscr} />
>>>>>>> 7b36a0b641a9ee0f376198d84547fcf6a4d7c537
      </Stack.Navigator>
    </NavigationContainer>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 7b36a0b641a9ee0f376198d84547fcf6a4d7c537
