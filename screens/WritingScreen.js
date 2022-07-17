// // import {
// //   StyleSheet,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   SafeAreaView,
// //   View,
// // } from "react-native";
// // import { useNavigation } from "@react-navigation/core";
// // import React, { useState } from "react";
// // import HomeScreen from "./HomeScreen";

// // const WritingScreen = () => {
// //   const navigation = useNavigation();
// //   const [Entry, setEntry] = useState("");

// //   const ADD = () => {
// //     navigation.navigate("HomeScreen", {
// //       Entry: Entry,
// //     });
// //   };

// //   return (
// //     <View style={styles.container}>
//       <SafeAreaView style={styles.topWrapper}>
//         <TouchableOpacity
//           style={styles.goBack}
//           onPress={() => navigation.navigate("HomeScreen")}
//         >
//           <Text style={styles.goBackText}>Go Back</Text>
//         </TouchableOpacity>
//       </SafeAreaView>
//       <SafeAreaView style={styles.writingContainer}>
//         <TextInput
//           style={styles.writingInput}
//           placeholder={"How are you feeling?"}
//           value={Entry}
//           onChangeText={(text) => setEntry(text)}
//         ></TextInput>
//         <TouchableOpacity onPress={ADD} style={styles.addButton}>
//           <Text style={styles.addbuttontext}>ADD</Text>
//         </TouchableOpacity>
//       </SafeAreaView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   topWrapper: {
//     position: "absolute",
//     top: 60,
//     width: "100%",
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     alignItems: "center",
//   },
//   titleInput: {
//     fontSize: 25,
//     fontWeight: "bold",
//   },
//   goBack: {
//     height: 40,
//     width: 80,
//     backgroundColor: "#fff",
//     borderRadius: 60,
//     justifyContent: "center",
//     alignItems: "center",
//     borderColor: "#9cc0e7",
//     borderWidth: 1.5,
//   },
//   writingContainer: {
//     position: "absolute",
//     top: 125,
//     width: 390,
//     height: 500,
//     marginLeft: 10,
//     marginRight: 10,
//     backgroundColor: "white",
//     borderRadius: 20,
//   },
//   writingInput: {
//     fontSize: 17,
//     paddingRight: 10,
//     left: 17,
//     bottom: -15,
//   },
//   addButton: {
//     position: "absolute",
//     height: 80,
//     width: 120,
//     backgroundColor: "#9cc0e7",
//     borderRadius: 60,
//     justifyContent: "center",
//     alignItems: "center",
//     borderColor: "#fff",
//     borderWidth: 1.5,
//     bottom: -150,
//     marginLeft: 145,
//   },
// });
// export default WritingScreen;
