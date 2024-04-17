import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Firstscr from "./screens/Firstscreen";
import Loginscr from "./screens/Loginscreen";
import Signupscr from "./screens/Signupscreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Firstscreen" component={Firstscr} />
        <Stack.Screen name="Loginscreen" component={Loginscr} />
        <Stack.Screen name="Signupscreen" component={Signupscr} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
