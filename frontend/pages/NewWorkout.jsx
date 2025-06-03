import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Button from "../components/Button";
import SetInput from "../components/SetInput";
import SetList from "../components/SetList";

export default function newWorkout({
  setSet,
  set,
  workout,
  setWorkout,
  setNewWorkoutScreen,
  workingExercises,
  setWorkingExercises,
}) {
  const [unit, setUnit] = useState("lb");

  const handleAddSet = () => {
    if (set.exercise && set.weight && set.reps) {
      setWorkout((prev) => [...prev, set]);
      setSet({ exercise: "", weight: "", reps: "", notes: "" });
      setWorkingExercises((prev) => {
        if (prev.includes(set.exercise)) {
          return prev;
        }
        return [set.exercise, ...prev];
      });

      Keyboard.dismiss();
    }
  };

  const handleSaveWorkout = () => {
    setSet({ exercise: "", weight: "", reps: "", notes: "" });
    setWorkout([]);
    setNewWorkoutScreen(false);
    // POST request to save workout
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Button text="Save Workout" onPress={handleSaveWorkout} />

          <View style={styles.inputContainer}>
            <View style={styles.set}>
              <SetInput
                placeholder="Exercise"
                value={set?.exercise}
                onChange={(text) => setSet({ ...set, exercise: text })}
                workingExercises={workingExercises}
              />
              <SetInput
                placeholder="Weight"
                value={set?.weight}
                onChange={(text) => setSet({ ...set, weight: text })}
                type="number-pad"
                unit={unit}
                setUnit={setUnit}
              />
              <SetInput
                placeholder="Reps"
                value={set?.reps}
                onChange={(text) => setSet({ ...set, reps: text })}
                type="number-pad"
              />
              <SetInput
                placeholder="Notes"
                value={set?.notes}
                onChange={(text) => setSet({ ...set, notes: text })}
              />

              <Button text="Add set" onPress={handleAddSet} />
            </View>
          </View>
          <SetList workout={workout} setWorkout={setWorkout} />
        </View>
        
      </TouchableWithoutFeedback>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    display: 'flex',

  },
  set: {
    display: "flex",
    padding: 5,
    width: 300,
  },
  inputContainer: {
    marginTop: 25,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
  },
});
