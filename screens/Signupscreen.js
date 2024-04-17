// SignUpScreen.js
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faEnvelope, faMobileScreen, faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../firebaseConfig"; // Make sure the path is correct
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.{8,})/; // At least 8 characters
    return passwordRegex.test(password);
  };

  const handleSignup = () => {
    if (!validateEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert(
        "Invalid Password",
        "Password must be at least 8 characters long and include at least one letter and one number."
      );
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Password Mismatch", "The passwords do not match.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
        Alert.alert("Signup Successful", `Welcome, ${user.email}`);
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  };

  return (
    <SafeAreaView style={styles.saf}>
      <Text style={styles.lets}>Let's Get Started!</Text>
      <Text style={styles.create}>
        Create an account to Q Allure to get all features
      </Text>
      <View style={styles.inputView}>
        <FontAwesomeIcon icon={faUser} style={styles.inputicon} />
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.inputView}>
        <FontAwesomeIcon icon={faEnvelope} style={styles.inputicon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputView}>
        <FontAwesomeIcon icon={faMobileScreen} style={styles.inputicon} />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.inputView}>
        <FontAwesomeIcon icon={faUnlockKeyhole} style={styles.inputicon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputView}>
        <FontAwesomeIcon icon={faUnlockKeyhole} style={styles.inputicon} />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttontext}>CREATE</Text>
      </TouchableOpacity>
      <Text>
        Already have an account?{" "}
        <Text
          style={styles.logintext}
          onPress={() => props.navigation.navigate("Login")}
        >
          Login here
        </Text>
      </Text>
    </SafeAreaView>
  );
}




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
