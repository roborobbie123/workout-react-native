import React, { useState, useMemo, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { useTrainer } from "../../../../../context/TrainerContext.js";
import { workouts } from "../../../../../DUMMY_DATA/workouts.js";

export default function ExerciseHistoryScreen() {
  const { selectedClient } = useTrainer();
  const [clientWorkouts, setClientWorkouts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedExercises, setExpandedExercises] = useState({});

  useEffect(() => {
    const clientWorkoutIds = selectedClient.workouts.results.map(
      (workout) => workout.id
    );
    const filteredWorkouts = clientWorkoutIds
      .map((id) => workouts[id])
      .filter(Boolean);
    setClientWorkouts(filteredWorkouts);
  }, [selectedClient]);

  const exerciseMap = useMemo(() => {
    const map = {};
    clientWorkouts.forEach(({ date, sets }) => {
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
  }, [clientWorkouts]);

  const exercises = useMemo(() => {
    const allExercises = Object.keys(exerciseMap).sort((a, b) =>
      a.toLowerCase().localeCompare(b.toLowerCase())
    );
    if (!searchQuery.trim()) return allExercises;
    return allExercises.filter((ex) =>
      ex.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [exerciseMap, searchQuery]);

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Lift Log</Text>

        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={20}
            color="#888"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search exercises"
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <FlatList
          data={exercises}
          renderItem={renderExerciseItem}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    marginTop: 75,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
    backgroundColor: "#fff",
    marginHorizontal: 10,
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
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#000",
  },
});
