import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { FlatList } from "react-native-gesture-handler";

export default function SetList({ workout }) {
  return (
    <View style={styles.setList}>
      {/* Header Row */}
      <View style={styles.tableRow}>
        <Text style={[styles.tableCell, styles.headerCell]}>Exercise</Text>
        <Text style={[styles.tableCell, styles.headerCell]}>Weight</Text>
        <Text style={[styles.tableCell, styles.headerCell]}>Reps</Text>
      </View>

      {/* FlatList Rows */}
      <FlatList
        data={workout}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.exercise}</Text>
            <Text style={styles.tableCell}>{item.weight}</Text>
            <Text style={styles.tableCell}>{item.reps}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  setList: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    overflow: "hidden",
    marginVertical: 20,
    width: "100%",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  tableCell: {
    flex: 1,
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
    backgroundColor: "#1E90FF",
    textAlign: "center",
    paddingVertical: 10,
    borderRightWidth: 1,
    borderColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3, // For Android shadow
  },
});
