import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

import Button from "@/components/Button";
import { useTrainer } from "../../../context/TrainerContext";

export default function Clients() {
  const { clientId } = useLocalSearchParams();
  const { selectedClient } = useTrainer();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedClient.name}</Text>
      <Text style={styles.email}>{selectedClient.email}</Text>

      <Button text="New Workout" onPress={() => router.push("/workouts/new")} />
      <Button text="Workout History" onPress={() => router.push("/workouts/history")} />
      <Button text="Lift Log" onPress={() => router.push("/workouts/liftlog")} />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  email: {
    fontSize: 18,
    color: "#666",
    marginTop: 8,
  },
});
