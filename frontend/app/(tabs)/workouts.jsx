import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { workouts } from "../../DUMMY_DATA/workouts.js";

import { useTrainer } from "../../context/TrainerContext.js";

const Workouts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Your Workouts</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.placeholderText}>
          No workouts yet — start tracking your progress!
        </Text>
      </View>
    </View>
  );
};

export default Workouts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f8fa",
  },
  banner: {
    backgroundColor: "#1E90FF", // DodgerBlue
    paddingTop: 50,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3, // shadow on Android
    shadowColor: "#000", // shadow on iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  bannerText: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 18,
    color: "#999",
    fontStyle: "italic",
    textAlign: "center",
  },
});
