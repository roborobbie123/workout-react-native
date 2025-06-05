import React from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";

export default function ClientsList({ clients, onClientPress }) {
  const sortedClients = [...clients].sort((a, b) => {
    const lastNameA = a.name.trim().split(" ").slice(-1)[0].toLowerCase();
    const lastNameB = b.name.trim().split(" ").slice(-1)[0].toLowerCase();
    return lastNameA.localeCompare(lastNameB);
  });

  return (
    <FlatList
      style={styles.list}
      data={sortedClients}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => onClientPress(item)}
          style={({ pressed }) => [
            styles.clientItem,
            pressed && styles.pressedItem,
          ]}
        >
          <Text style={styles.clientName}>{item.name}</Text>
          <Text style={styles.clientEmail}>{item.email}</Text>
        </Pressable>
      )}
      ListEmptyComponent={
        <Text style={styles.emptyText}>No clients found.</Text>
      }
      contentContainerStyle={
        clients.length === 0 ? styles.emptyContainer : undefined
      }
    />
  );
}

const styles = StyleSheet.create({
  list: {
    width: 360,
  },
  clientItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "white",
    borderRadius: 10,
  },
  pressedItem: {
    backgroundColor: "#e0e0e0",
  },
  clientName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  clientEmail: {
    fontSize: 14,
    color: "#666",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#999",
  },
  emptyContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
});
