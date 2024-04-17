// SignUpScreen.js
import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faEnvelope, faMobileScreen, faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';

<<<<<<< HEAD
const SignUpScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faUser} style={styles.icon} />
        <TextInput placeholder="Username" style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
        <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faMobileScreen} style={styles.icon} />
        <TextInput placeholder="Mobile Number" style={styles.input} keyboardType="phone-pad" />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faUnlockKeyhole} style={styles.icon} />
        <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
=======
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

function Signup (props) {
  return (
    <SafeAreaView style={styles.saf}>
      <Text style={styles.lets}>Let's Get Started!</Text>
      <Text style={styles.create}>
        Create an account to Q Allure to get all features
      </Text>
      <View style={styles.inputView}>
        <FontAwesomeIcon icon={faUser} style={styles.inputicon} />
        <TextInput style={styles.input} placeholder="Name"></TextInput>
      </View>
      <View style={styles.inputView}>
        <FontAwesomeIcon icon={faEnvelope} style={styles.inputicon} />
        <TextInput style={styles.input} placeholder="Email"></TextInput>
      </View>
      <View style={styles.inputView}>
        <FontAwesomeIcon icon={faMobileScreen} style={styles.inputicon} />
        <TextInput style={styles.input} placeholder="Phone"></TextInput>
      </View>
      <View style={styles.inputView}>
        <FontAwesomeIcon icon={faUnlockKeyhole} style={styles.inputicon} />
        <TextInput style={styles.input} placeholder="Password"></TextInput>
      </View>
      <View style={styles.inputView}>
        <FontAwesomeIcon icon={faUnlockKeyhole} style={styles.inputicon} />
        <TextInput
          style={styles.input}
          placeholder="Conirm Password"
        ></TextInput>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>CREATE</Text>
      </TouchableOpacity>
      <Text>
        <Text>Already have an account?</Text>

        <Text
          style={styles.logintext}
         
        >
          Login here
        </Text>
      </Text>
>>>>>>> 7b36a0b641a9ee0f376198d84547fcf6a4d7c537
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
});

export default SignUpScreen;
=======
  saf: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lets: {
    fontSize: 23,
    fontWeight: "800",
  },
  create: {
    color: "grey",
    marginBottom: 30,
  },
  inputView: {
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
  input: {
    width: 230,
    height: 49,
    color: "#0148a4",
  },
  button: {
    backgroundColor: "#0148a4",
    height: 60,
    width: "60%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60,
    marginTop: 27,
  },
  buttontext: { color: "white", fontWeight: "600", fontSize: 15 },
  logintext: {
    color: "#0148a4",
  },
  touchlogin: {
    backgroundColor: "grey",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Signup;
>>>>>>> 7b36a0b641a9ee0f376198d84547fcf6a4d7c537
