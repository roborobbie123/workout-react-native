import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

import NewWorkout from "../pages/NewWorkout.jsx";

export default function Index() {
  const [newWorkoutScreen, setNewWorkoutScreen] = useState(false);
  const [workout, setWorkout] = useState([]);
  const [set, setSet] = useState({
    exercise: "",
    weight: "",
    reps: "",
    notes: "",
  });
  const [workingExercises, setWorkingExercises] = useState([]);

  return (
    <View style={styles.root}>
      {!newWorkoutScreen && (
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>PRism</Text>
          </View>
          <View style={styles.button}>
            <Pressable onPress={() => setNewWorkoutScreen(true)}>
              <Text style={styles.buttonText}>Start New Workout</Text>
            </Pressable>
          </View>
        </View>
      )}
      {newWorkoutScreen && (
        <NewWorkout
          setSet={setSet}
          set={set}
          workout={workout}
          setWorkout={setWorkout}
          setNewWorkoutScreen={setNewWorkoutScreen}
          workingExercises={workingExercises}
          setWorkingExercises={setWorkingExercises}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
  },
  titleContainer: {
    alignItems: "center",
    borderWidth: 1,
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
