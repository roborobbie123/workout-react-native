import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function WorkoutExerciseList({ workout }) {
  const [expandedExercises, setExpandedExercises] = useState({});

  const toggleExercise = (exerciseName) => {
    setExpandedExercises((prev) => ({
      ...prev,
      [exerciseName]: !prev[exerciseName],
    }));
  };

  const exercises = [...new Set(workout.sets.map((s) => s.exercise))];

  return (
    <View style={styles.container}>
      <Text style={styles.workoutDate}>
        {workout.date} • <Text style={styles.summary}>{workout.summary}</Text>
      </Text>
      {exercises.map((exercise) => (
        <View key={exercise} style={styles.exerciseContainer}>
          <TouchableOpacity
            onPress={() => toggleExercise(exercise)}
            style={styles.exerciseHeader}
            activeOpacity={0.7}
          >
            <Text style={styles.exerciseTitle}>{exercise}</Text>
            <Text style={styles.toggleIcon}>
              {expandedExercises[exercise] ? "▲" : "▼"}
            </Text>
          </TouchableOpacity>

          {expandedExercises[exercise] && (
            <View style={styles.setsContainer}>
              {workout.sets
                .filter((set) => set.exercise === exercise)
                .map((set, idx) => (
                  <View key={idx} style={styles.setRow}>
                    <Text style={styles.setText}>
                      <Text style={styles.setLabel}>Weight:</Text> {set.weight}
                    </Text>
                    <Text style={styles.setText}>
                      <Text style={styles.setLabel}>Reps:</Text> {set.reps}
                    </Text>
                    {set.notes ? (
                      <Text style={[styles.setText, styles.notes]}>
                        <Text style={styles.setLabel}>Notes:</Text> {set.notes}
                      </Text>
                    ) : null}
                  </View>
                ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fefefe",
    borderRadius: 12,
    marginVertical: 12,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  workoutDate: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginBottom: 18,
    textAlign: "center",
  },
  summary: {
    fontWeight: "500",
    color: "#666",
  },
  exerciseContainer: {
    marginBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 14,
  },
  exerciseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  exerciseTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1E90FF",
  },
  toggleIcon: {
    fontSize: 16,
    color: "#1E90FF",
  },
  setsContainer: {
    marginTop: 12,
    paddingLeft: 12,
  },
  setRow: {
    marginBottom: 10,
    backgroundColor: "#f4f8ff",
    padding: 10,
    borderRadius: 8,
  },
  setText: {
    fontSize: 16,
    color: "#444",
    marginBottom: 4,
  },
  setLabel: {
    fontWeight: "600",
    color: "#1E90FF",
  },
  notes: {
    fontStyle: "italic",
    color: "#666",
  },
});
