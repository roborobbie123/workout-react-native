import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { TextInput } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function newWorkout({ setSet, set }) {
  return (
    <GestureHandlerRootView>
      <View>
        <View style={styles.set}>
          <View style={styles.setInput}>
            <TextInput
              style={styles.inputText}
              placeholder="Exercise"
              placeholderTextColor="#888"
              value={set?.exercise}
              onChangeText={(text) => setSet({ ...set, exercise: text })}
            />
          </View>
          <View style={styles.setInput}>
            <TextInput
              style={styles.inputText}
              keyboardType="number-pad"
              placeholder="Weight"
              placeholderTextColor="#888"
              value={set?.weight}
              onChangeText={(text) => setSet({ ...set, weight: text })}
            />
          </View>
          <View style={styles.setInput}>
            <TextInput
              style={styles.inputText}
              keyboardType="number-pad"
              placeholder="Reps"
              placeholderTextColor="#888"
              value={set?.reps}
              onChangeText={(text) => setSet({ ...set, reps: text })}
            />
          </View>
        </View>
      </View>

      <View style={styles.button}>
        <Pressable onPress={() => setNewWorkoutScreen(false)}>
          <Text style={styles.buttonText}>Save Workout</Text>
        </Pressable>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
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
    padding: 5,
    borderRadius: 2,
    marginBottom: 2,
  },
  inputText: {
    fontSize: 25,
  },
});
