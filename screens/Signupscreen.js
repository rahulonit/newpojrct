// SignUpScreen.js
import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faEnvelope, faMobileScreen, faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
