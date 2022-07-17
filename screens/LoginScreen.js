import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("HomeScreen");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("C:/Users/bridg/Documents/FinalFeelProject/finalfeelproject/assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("C:/Users/bridg/Documents/FinalFeelProject/finalfeelproject/assets/FEELLOGO.png")}
        />
        <Text style={styles.heading}> Your Handy Everyday Journal </Text>
      </View>

      <View style={styles.container} behavior="padding">
        <View style={styles.InputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />

          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleSignup}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity>
          <Text style={styles.forgot}>Forget Password or Email?</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },

  InputContainer: {
    width: 300,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#9cc0e7",
    width: 250,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#9cc0e7",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  buttonOutlineText: {
    color: "#9cc0e7",
    fontWeight: "bold",
  },

  logo: {
    width: 225,
    height: 170,
  },
  forgot: {
    fontWeight: "bold",
    paddingTop: 10,
    fontSize: 12,
  },
  heading: {
    fontWeight: "bold",
    color: "white",
  },
});

export default LoginScreen;
