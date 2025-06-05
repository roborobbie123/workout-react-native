import React, { useState, useEffect } from "react";
import { FlatList, Text, View, StyleSheet, Pressable } from "react-native";
import Button from "../../../../../components/Button.jsx";
import WorkoutExerciseList from "../../../../../components/WorkoutExerciseList.jsx";

import { workouts } from "../../../../../DUMMY_DATA/workouts.js";

import { useTrainer } from "../../../../../context/TrainerContext.js";

export default function WorkoutHistoryScreen({}) {
  const { selectedClient } = useTrainer();
  const [clientWorkouts, setClientWorkouts] = useState([]);

  useEffect(() => {
    const clientWorkoutIds = selectedClient.workouts.results.map(
      (workout) => workout.id
    );
    const filteredWorkouts = clientWorkoutIds
      .map((id) => workouts[id])
      .filter(Boolean);
    setClientWorkouts(filteredWorkouts);
    console.log(clientWorkoutIds);
  }, [selectedClient]);

  return (
    <View style={styles.container}>
      <FlatList
      style={styles.list}
        data={clientWorkouts}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <WorkoutExerciseList workout={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  list: {
    paddingVertical: 100
  }
});
