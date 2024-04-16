import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, StatusBar } from 'react-native';

const firstscreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://cdn.pixabay.com/photo/2016/10/24/09/41/businesswoman-1765651_960_720.png" }}
        style={styles.banner}
      />
      <Text style={styles.heading}>Welcome to{"\n"}SeekJob</Text>
      <Text style={styles.text}>
        Tap below to login to your account and explore opportunities.
      </Text>
      <TouchableOpacity
        style={[styles.button, styles.btncolor1]}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

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
