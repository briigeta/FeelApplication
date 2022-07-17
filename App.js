import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";
import Entries from "./components/Entries";
/*import WritingScreen from "./screens/WritingScreen";*/

const Stack = createNativeStackNavigator();

export default function App() {
  const [entries, setEntries] = useState();
  const [entriesItem, setEntriesItem] = useState([]);

  const handleAddEntries = () => {
    setEntriesItem([...entriesItem, entries]);
    setEntries("");
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={HomeScreen}
        />
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="WritingScreen"
          component={WritingScreen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
