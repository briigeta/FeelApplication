import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  keyboardVerticalOffset,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";
import Entries from "../components/Entries";
import { useState, useEffect } from "react";
import { auth } from "../firebase";

export default function HomeScreen() {
  const [entries, setEntries] = useState();
  const [entriesItem, setEntriesItem] = useState([]);

  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LoginScreen");
      })
      .catch((error) => alert(error.message));
  };

  const handleAddEntries = () => {
    setEntriesItem([...entriesItem, entries]);
    setEntries(null);
  };

  const completeEntries = (index) => {
    let itemsCopy = [...entriesItem];
    itemsCopy.splice(index, 1);
    setEntriesItem(itemsCopy);
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.entryWrapper}>
        <Text style={styles.Title}>Start Writing</Text>
        <TouchableOpacity onPress={handleSignOut} style={styles.signoutButton}>
          <Text style={styles.signoutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.items}>
        {entriesItem.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => completeEntries()}>
              <Entries text={item} />
            </TouchableOpacity>
          );
        })}
      </View>

      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={styles.buttonWrapper}
      >
        <TextInput
          style={styles.writebutton}
          placeholder={"Start Writing"}
          value={entries}
          onChangeText={(text) => setEntries(text)}
        />
      </KeyboardAvoidingView>
      <TouchableOpacity
        onPress={() => handleAddEntries()}
        style={styles.addButton}
      >
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  entryWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 20,
  },

  buttonWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    justifyContent: "space-around",
  },

  writebutton: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#9cc0e7",
    borderWidth: 1.5,
    width: 250,
  },
  writebuttonText: {},
  addButton: {
    bottom: 0,
    height: 50,
    width: 75,
    backgroundColor: "#9cc0e7",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 1.5,
    position: "absolute",
    bottom: 60,
    right: 20,
    alignSelf: "flex-end",
  },
  signoutButton: {
    height: 60,
    width: 100,
    marginTop: -20,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#9cc0e7",
    borderWidth: 1.5,
  },
  entriesItem: {
    color: "black",
  },
  items: {
    fontSize: 12,
    color: "#9ccce7",
  },
  addText: { fontWeight: "bold", color: "#fff" },
  signoutText: {
    fontWeight: "bold",
    color: "#9ccc0e7",
  },
});
