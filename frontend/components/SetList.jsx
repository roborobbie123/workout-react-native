import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { FlatList } from "react-native-gesture-handler";

import Icon from "react-native-vector-icons/MaterialIcons";

export default function SetList({ workout, setWorkout }) {
  const handleDeleteSet = (targetIndex) => {
    setWorkout((prev) => prev.filter((_, i) => i !== targetIndex));
  };

  return (
    <View style={styles.setList}>
      {/* Header Row */}
      <View style={styles.tableRow}>
        <Text style={[styles.tableCell, styles.headerCell]}>Exercise</Text>
        <Text style={[styles.tableCell, styles.headerCell]}>Weight</Text>
        <Text style={[styles.tableCell, styles.headerCell]}>Reps</Text>
        <Text style={[styles.tableCell, styles.headerCell]}>Edit</Text>
      </View>

      {/* FlatList Rows */}
      <FlatList
        data={workout}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.exercise}</Text>
            <Text style={styles.tableCell}>{item.weight}</Text>
            <Text style={styles.tableCell}>{item.reps}</Text>
            <View style={styles.iconBox}>
              <TouchableOpacity>
                <Icon name="edit" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteSet(index)}>
                <Icon name="delete" size={24} color="red" />
              </TouchableOpacity>
            </View>
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
    width: 350,
    height: 200,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  tableCell: {
    flex: 1,
    fontSize: 18,
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
    paddingHorizontal: 3,
    borderRightWidth: 1,
    borderColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3, // For Android shadow
  },
  iconBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
