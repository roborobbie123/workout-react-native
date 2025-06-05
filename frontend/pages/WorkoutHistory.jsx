import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet, Pressable } from "react-native";
import Button from "../components/Button.jsx";
import WorkoutExerciseList from "../components/WorkoutExerciseList.jsx";

export default function WorkoutHistoryScreen({
  setWorkoutHistoryScreen,
  workouts,
}) {
  return (
    <View>
      <FlatList
        data={workouts}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <WorkoutExerciseList workout={item} />}
      />
      <Button text="Return" onPress={() => setWorkoutHistoryScreen(false)} />
    </View>
  );
}

const styles = StyleSheet.create({});
