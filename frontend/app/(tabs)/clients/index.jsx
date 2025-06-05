import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useTrainer } from "../../../context/TrainerContext";
import ClientsList from "../../../components/ListOfClients";
import { useRouter } from "expo-router";

export default function index() {
  const { clientList, setSelectedClient } = useTrainer();
  const router = useRouter();

  const onPress = (client) => {
    setSelectedClient(client);
    router.push(`/clients/${client.id}`);
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>SEARCH CLIENT</Text>
      <ClientsList clients={clientList} onClientPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    marginTop: 75
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
});
