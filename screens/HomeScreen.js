import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faUnlockKeyhole, faFacebookF, faGoogle} from '@fortawesome/free-solid-svg-icons';


const Login = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.homeimg}
        source={{ uri: "https://cdn.pixabay.com/photo/2016/10/24/09/41/businesswoman-1765651_960_720.png" }}
      />
      <Text style={styles.heading}>Welcome back!</Text>
      <Text style={styles.textlog}>
        Log in to your existing account of Q Allure
      </Text>
      <View style={styles.textInputView}>
        <FontAwesomeIcon icon={faUser} style={styles.icon} />
        <TextInput style={styles.input} placeholder="Email" />
      </View>
      <View style={styles.textInputView}>
        <FontAwesomeIcon icon={faUnlockKeyhole} style={styles.icon} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      </View>
      <Text style={styles.forgot}>Forgot Password?</Text>
      <TouchableOpacity style={[styles.button, styles.buttonColor1]} onPress={() => props.navigation.navigate("SignUpScreen")}>
        <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>
      <Text style={styles.connect}>Or connect using</Text>
      <View style={styles.mediaView}>
        <TouchableOpacity style={[styles.mediaButton, styles.mediaButtonColorFacebook]}>
          <FontAwesomeIcon icon={faFacebookF} style={styles.icon} />
          <Text style={styles.socialMediaText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.mediaButton, styles.mediaButtonColorGoogle]}>
          <FontAwesomeIcon icon={faGoogle} style={styles.icon} />
          <Text style={styles.socialMediaText}>Google</Text>
        </TouchableOpacity>
      </View>
      <Text>
        Don't have an account?{' '}
        <Text
          style={styles.signUpLink}
          onPress={() => props.navigation.navigate("SignUpScreen")}
        >
          Sign Up
        </Text>
      </Text>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  homeimg: {
    height: 200,
    width: '100%',
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textlog: {
    color: 'grey',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  TextInputview: {
    flexDirection: 'row',
    marginBottom: 15,
    width: '100%',
  },
  inputicon: {
    padding: 10,
  },
  forgot: {
    alignSelf: 'flex-end',
    color: 'blue',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0148a4',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  connect: {
    color: 'grey',
    marginTop: 20,
    marginBottom: 10,
  },
  mediaview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  mediabotton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%',
    padding: 10,
    borderRadius: 5,
  },
  mediabottoncolorf: {
    backgroundColor: '#385c8e',
  },
  mediabottoncolorg: {
    backgroundColor: '#f14336',
  },
  facebooktext: {
    marginLeft: 10,
    color: 'white',
  },
  mediaicon: {
    color: 'white',
  },
  signUpLink: {
    color: 'blue',
    fontWeight: 'bold',
  }
});

export default Login;
