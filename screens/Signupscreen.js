import react from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
export default function SignUpScreen({}) {
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
        <TextInput style={styles.input} placeholder="Conirm Password"></TextInput>
      </View>
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
});
