import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>RoboTrain</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginTop: 75,
  },
  titleContainer: {
    alignItems: "center",
    marginVertical: 50,
  },
  titleText: {
    fontSize: 40,
    padding: 5,
    color: "#1E90FF",
  },
  button: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 3,
    borderWidth: 1,
    borderRadius: 5,
    width: 150,
    height: 40,
    borderColor: "#1E90FF",
    marginTop: 20,
  },
  buttonText: {
    color: "#1E90FF",
  },
  set: {
    display: "flex",
    borderWidth: 1,
    padding: 5,
  },
  setInput: {
    borderWidth: 1,
    padding: 3,
    borderRadius: 2,
    marginBottom: 2,
  },
});
