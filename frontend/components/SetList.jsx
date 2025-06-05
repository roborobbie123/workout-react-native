import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { FlatList } from "react-native-gesture-handler";

import Icon from "react-native-vector-icons/MaterialIcons";
import EditModal from "../components/EditModal.jsx";
import ConfirmationModal from "./ConfirmationModel.jsx";

export default function SetList({ workout, setWorkout, workingExercises }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentSet, setCurrentSet] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [setToDeleteIndex, setSetToDeleteIndex] = useState(null);

  const confirmDeleteSet = (index) => {
    setSetToDeleteIndex(index);
    setIsConfirmVisible(true);
  };

  const handleConfirmDelete = () => {
    if (setToDeleteIndex !== null) {
      setWorkout((prev) => prev.filter((_, i) => i !== setToDeleteIndex));
      setSetToDeleteIndex(null);
      setIsConfirmVisible(false);
    }
  };

  const openEditModal = (item, index) => {
    setCurrentSet(item);
    setEditIndex(index);
    setIsModalVisible(true);
  };

  const handleSaveUpdatedSet = (updatedSet) => {
    const updatedWorkout = [...workout];
    updatedWorkout[editIndex] = updatedSet;
    setWorkout(updatedWorkout);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.setList}>
      <View style={styles.headerRow}>
        {["Exercise", "Weight", "Reps", "Edit"].map((title, i, arr) => (
          <Text
            key={title}
            style={[
              styles.headerCell,
              i === arr.length - 1 && { borderRightWidth: 0 }, // no border on last cell
            ]}
          >
            {title}
          </Text>
        ))}
      </View>

      {workout.length === 0 ? (
        <View style={styles.emptyMessageRow}>
          <Text style={styles.emptyMessageText}>
            No workout data available.
          </Text>
        </View>
      ) : (
        <FlatList
          data={workout}
          extraData={workout}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>{item.exercise}</Text>
              <Text style={styles.tableCell}>{item.weight}</Text>
              <Text style={styles.tableCell}>{item.reps}</Text>
              <View style={styles.iconBox}>
                <TouchableOpacity onPress={() => openEditModal(item, index)}>
                  <Icon name="edit" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => confirmDeleteSet(index)}>
                  <Icon name="delete" size={24} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
      <EditModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        setData={currentSet}
        workingExercises={workingExercises}
        onSave={handleSaveUpdatedSet}
      />
      <ConfirmationModal
        visible={isConfirmVisible}
        message="Are you sure you want to delete this set?"
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsConfirmVisible(false)}
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
    height: 275,
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
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#1E90FF",
    paddingVertical: 12,
    // Remove horizontal padding here so header fills fully
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
    textAlign: "center",
    paddingVertical: 12,
    // Remove border radius and shadow for seamless row
    borderRadius: 0,
    shadowOpacity: 0,
    elevation: 0,
    // Add vertical borders except for last cell, see note below
    borderRightWidth: 1,
    borderRightColor: "rgba(255, 255, 255, 0.4)",
  },
  iconBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  emptyMessageRow: {
    flexDirection: "row",
    paddingVertical: 20,
    justifyContent: "center",
  },
  emptyMessageText: {
    fontSize: 16,
    color: "#999",
    fontStyle: "italic",
  },
});
