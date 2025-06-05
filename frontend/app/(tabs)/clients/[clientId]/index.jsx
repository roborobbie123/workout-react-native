import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { MaterialIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";

import Button from "@/components/Button";
import { useTrainer } from "../../../../context/TrainerContext";

export default function ClientDetails() {
  const { clientId } = useLocalSearchParams();
  const { selectedClient } = useTrainer();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{selectedClient.name}</Text>
        <Text style={styles.email}>{selectedClient.email}</Text>
      </View>
      <ScrollView style={styles.buttons}>
        <Button
          leftIcon={
            <MaterialIcons name="fitness-center" size={24} color="white" />
          }
          text="New Workout"
          onPress={() =>
            router.push(`/clients/${clientId}/workouts/new-workout`)
          }
        />
        <Button
          leftIcon={<FontAwesome5 name="history" size={20} color="white" />}
          text="Workout History"
          onPress={() =>
            router.push(`/clients/${clientId}/workouts/workout-history`)
          }
        />
        <Button
          leftIcon={<Ionicons name="barbell" size={24} color="white" />}
          text="Lift Log"
          onPress={() => router.push(`/clients/${clientId}/workouts/lift-log`)}
        />
        <Button
          leftIcon={<FontAwesome5 name="comment-alt" size={20} color="white" />}
          text="Message"
          onPress={() => {
            // Add your navigation or message function here
            console.log("Message button pressed");
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 75,
  },
  titleContainer: {
    alignItems: 'center',
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
  buttons: {
    flex: 1,
    paddingTop: 50,
  },
});
