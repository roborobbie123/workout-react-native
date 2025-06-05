import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Button from "@/components/Button";

export default function ClientScreen({ client, setClientScreen, setNewWorkoutScreen, setWorkoutHistoryScreen, setLiftLog }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{client.name}</Text>
      <Text style={styles.email}>{client.email}</Text>
      {/* Add more client details here if you want */}
      <Button
              text="New Workout"
              onPress={() => setNewWorkoutScreen(true)}
            />
            <Button
              text="Workout History"
              onPress={() => setWorkoutHistoryScreen(true)}
            />
            <Button text="Lift Log" onPress={() => setLiftLog(true)} />

      <Button text="Return" onPress={() => setClientScreen(false)} />
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
