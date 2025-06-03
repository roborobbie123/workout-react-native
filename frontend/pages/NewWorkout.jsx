import React from "react";
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
  const handleAddSet = () => {
    if (set.exercise && set.weight && set.reps) {
      setWorkout((prev) => [...prev, set]);
      setSet({ exercise: "", weight: "", reps: "" });
      setWorkingExercises((prev) => {
        if (prev.includes(set.exercise)) {
          return prev;
        }
        [set.exercise, ...prev];
      });

      Keyboard.dismiss();
    }
  };

  const handleSaveWorkout = () => {
    setSet({ exercise: "", weight: "", reps: "" });
    setWorkout([]);
    setNewWorkoutScreen(false);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
          <View>
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
              />
              <SetInput
                placeholder="Reps"
                value={set?.reps}
                onChange={(text) => setSet({ ...set, reps: text })}
                type="number-pad"
              />
              <Button text="Add set" onPress={handleAddSet} />
            </View>
          </View>
          <SetList workout={workout} />

          <Button text="Save Workout" onPress={handleSaveWorkout} />
        </View>
      </TouchableWithoutFeedback>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  set: {
    display: "flex",
    padding: 5,
    width: 300,
  },
});
