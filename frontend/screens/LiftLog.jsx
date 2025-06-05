import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

import Button from "../components/Button.jsx";

export default function ExerciseHistoryScreen({ workouts, setLiftLog }) {
  const [expandedExercises, setExpandedExercises] = useState({});

  const exerciseMap = useMemo(() => {
    const map = {};
    workouts.forEach(({ date, sets }) => {
      sets.forEach((set) => {
        if (!map[set.exercise]) map[set.exercise] = [];
        map[set.exercise].push({ ...set, date });
      });
    });
    Object.keys(map).forEach((exercise) => {
      map[exercise].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    });
    return map;
  }, [workouts]);

  const exercises = useMemo(() => {
    return Object.keys(exerciseMap).sort((a, b) =>
      a.toLowerCase().localeCompare(b.toLowerCase())
    );
  }, [exerciseMap]);

  const toggleExercise = (exercise) => {
    setExpandedExercises((prev) => ({
      ...prev,
      [exercise]: !prev[exercise],
    }));
  };

  const renderExerciseItem = ({ item: exercise }) => {
    const sets = exerciseMap[exercise];
    const expanded = expandedExercises[exercise];

    return (
      <View style={styles.exerciseCard}>
        <TouchableOpacity onPress={() => toggleExercise(exercise)}>
          <Text style={styles.exerciseTitle}>{exercise}</Text>
        </TouchableOpacity>

        {expanded && (
          <View style={styles.setsContainer}>
            {sets.map((set, index) => (
              <View key={index} style={styles.setItem}>
                <Text style={styles.setDate}>{set.date}</Text>
                <View style={styles.setDetails}>
                  <Text style={styles.setText}>Weight: {set.weight} lbs</Text>
                  <Text style={styles.setText}>Reps: {set.reps}</Text>
                  {set.notes ? (
                    <Text style={styles.notesText}>Notes: {set.notes}</Text>
                  ) : null}
                </View>
              </View>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Lift Log</Text>
      <FlatList
        data={exercises}
        renderItem={renderExerciseItem}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.listContent}
      />
      <Button text="Return" onPress={() => setLiftLog(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    paddingTop: 40,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 20,
    color: "#222",
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  exerciseCard: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
  },
  exerciseTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E90FF",
    marginBottom: 8,
  },
  setsContainer: {
    marginTop: 4,
  },
  setItem: {
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingVertical: 10,
  },
  setDate: {
    fontSize: 14,
    fontWeight: "600",
    color: "#888",
    marginBottom: 4,
  },
  setDetails: {
    paddingLeft: 8,
  },
  setText: {
    fontSize: 16,
    color: "#444",
    marginBottom: 2,
  },
  notesText: {
    fontSize: 14,
    color: "#666",
    fontStyle: "italic",
    marginTop: 2,
  },
});
