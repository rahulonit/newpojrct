// SignUpScreen.js
import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faEnvelope, faMobileScreen, faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
