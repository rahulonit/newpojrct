import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
// import SignUpScreen from "./screens/Signupscreen";
import loginscreen from "./screens/Loginscreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home page"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Signupscreen" component={SignUpScreen} />
        <Stack.Screen name="Loginscreen" component={loginscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Login = (props) => {
  return (
    <View style={css.container}>
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2016/10/24/09/41/businesswoman-1765651_960_720.png",
        }}
        style={css.banner}
      />
      <Text style={css.heading}>Welcome to{"\n"}SeekJob</Text>
      <Text style={css.text}>
        The static images are added in app by placing it in somewhere in the
        source code directory and provide its path as:
      </Text>
      <TouchableOpacity
        style={[css.button, css.btncolor1]}
        onPress={() => props.navigation.navigate("Loginscreen")}

        // onPress={() => props.navigation.navigate("Home page")}
      >
        <Text style={css.buttonText}>LOG IN</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

// const Home = (props) => {
//   return (
//     <SafeAreaView style={css.home}>
//       <Image
//         style={css.homeimg}
//         src="https://cdn.pixabay.com/photo/2016/10/24/09/41/businesswoman-1765651_960_720.png"
//       />
//       <Text style={css.heading}>Welcome back!</Text>
//       <Text style={css.textlog}>
//         Log in to your existant account of Q Allure
//       </Text>
//       <View style={css.TextInputview}>
//         <FontAwesomeIcon icon={faUser} style={css.inputicon} />
//         <TextInput style={css.input} placeholder="Gmail"></TextInput>
//       </View>
//       <View style={css.TextInputview}>
//         <FontAwesomeIcon icon={faUnlockKeyhole} style={css.inputicon} />
//         <TextInput style={css.input} placeholder="Password"></TextInput>
//       </View>
//       <Text style={css.forgot}>Forgot Password?</Text>
//       <TouchableOpacity style={[css.button, css.btncolor1]}>
//         <Text style={css.buttonText}>LOG IN</Text>
//       </TouchableOpacity>
//       <Text style={css.connect}>Or connect using</Text>
//       <View style={css.mediaview}>
//         <TouchableOpacity style={[css.mediabotton, css.mediabottoncolorf]}>
//           <FontAwesomeIcon icon={faFacebookF} style={css.mediaicon} />
//           <Text style={css.facebooktext}>Facebook</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[css.mediabotton, css.mediabottoncolorg]}>
//           <FontAwesomeIcon icon={faGoogle} style={css.mediaicon} />
//           <Text style={css.facebooktext}>Google</Text>
//         </TouchableOpacity>
//       </View>
//       <Text>
//         <Text>Don't have an account?</Text>
//         <Text
//           style={css.inputicon}
//           onPress={() => props.navigation.navigate("Signupscreen")}
//         >
//           Sign Up
//         </Text>
//       </Text>
//     </SafeAreaView>
//   );
// };

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  banner: {
    height: "40%",
    width: "80%",
  },
  heading: {
    fontSize: 30,
    fontWeight: "500",
    paddingTop: 20,
    textAlign: "center",
  },
  text: {
    color: "grey",
    height: 70,
    width: 280,
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
  },
  button: {
    height: 60,
    width: "60%",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  btncolor1: {
    backgroundColor: "#0148a4",
  },
  btncolor2: {
    backgroundColor: "grey",
  },
  home: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    overflow: "scroll",
    height: "100%",
  },
  homeimg: {
    height: "30%",
    width: "100%",
  },
  textlog: {
    color: "grey",
    marginBottom: 20,
  },
  input: {
    width: 230,
    height: 49,
    color: "#0148a4",
  },
  TextInputview: {
    marginBottom: 10,
    marginTop: 10,
    height: 50,
    width: 290,
    justifyContent: "space-around",
    alignItems: "flex-start",
    alignContent: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 20,
    borderColor: "#0148a4",
  },
  inputicon: {
    alignSelf: "center",
    color: "#0148a4",
  },
  forgot: {
    alignSelf: "flex-end",
    paddingRight: 40,
    marginBottom: 15,
  },
  connect: {
    color: "grey",
    marginTop: 20,
  },
  mediaview: {
    height: 45,
    width: 280,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 20,
  },
  mediabotton: {
    alignContent: "center",
    flexDirection: "row",
    backgroundColor: "#0148a4",
    height: 40,
    width: 120,
    justifyContent: "space-evenly",
    borderRadius: 7,
    alignItems: "center",
  },
  mediabottoncolorf: {
    backgroundColor: "#385c8e",
  },
  mediabottoncolorg: {
    backgroundColor: "#f14336",
  },
  facebooktext: { color: "white", fontWeight: "500", alignSelf: "center" },
  mediaicon: {
    color: "white",
  },
});
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
