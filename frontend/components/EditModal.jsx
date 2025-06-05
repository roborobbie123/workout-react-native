import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Pressable,
  StyleSheet,
} from "react-native";

export default function EditSetModal({
  visible,
  onClose,
  onSave,
  setData,
  workingExercises = [], // array of exercise names for suggestions
}) {
  const [values, setValues] = useState({
    exercise: "",
    weight: "",
    reps: "",
    notes: "",
  });

  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (setData) {
      setValues({
        exercise: setData.exercise || "",
        weight: setData.weight?.toString() || "",
        reps: setData.reps?.toString() || "",
        notes: setData.notes || "",
      });
    }
  }, [setData]);

  const filteredSuggestions = workingExercises.filter(
    (ex) =>
      ex.toLowerCase().includes(values.exercise.toLowerCase()) &&
      values.exercise.length > 0
  );

  const handleSelectSuggestion = (exercise) => {
    setValues((prev) => ({ ...prev, exercise }));
    setShowSuggestions(false);
  };

  const handleChange = (field, text) => {
    setValues((prev) => ({ ...prev, [field]: text }));
    if (field === "exercise") {
      setShowSuggestions(true);
    }
  };

  const handleSave = () => {
    const updatedSet = {
      exercise: values.exercise.trim(),
      weight: parseFloat(values.weight) || 0,
      reps: parseInt(values.reps) || 0,
      notes: values.notes.trim(),
    };
    onSave(updatedSet);
    onClose();
    setShowSuggestions(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setShowSuggestions(false);
        onClose();
      }}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Edit Set</Text>

          <TextInput
            style={styles.input}
            placeholder="Exercise"
            value={values.exercise}
            onChangeText={(text) => handleChange("exercise", text)}
            autoCorrect={false}
            autoCapitalize="none"
          />
          {/* Suggestions List */}
          {showSuggestions && filteredSuggestions.length > 0 && (
            <FlatList
              style={styles.suggestionsList}
              data={filteredSuggestions}
              keyExtractor={(item, index) => item + index}
              keyboardShouldPersistTaps="handled"
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => handleSelectSuggestion(item)}
                  style={styles.suggestionItem}
                >
                  <Text style={styles.suggestionText}>{item}</Text>
                </Pressable>
              )}
            />
          )}

          <TextInput
            style={styles.input}
            placeholder="Weight"
            value={values.weight}
            keyboardType="numeric"
            onChangeText={(text) => handleChange("weight", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Reps"
            value={values.reps}
            keyboardType="numeric"
            onChangeText={(text) => handleChange("reps", text)}
          />
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={4}
            placeholder="Notes"
            value={values.notes}
            onChangeText={(text) => handleChange("notes", text)}
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity
              onPress={() => {
                setShowSuggestions(false);
                onClose();
              }}
              style={styles.cancelButton}
            >
              <Text style={{ color: "#555", fontWeight: 'bold' }}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
              <Text style={{ color: "white", fontWeight: "bold" }}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "85%",
    maxHeight: "80%",
    position: "absolute",
    top: 175,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 6,
  },
  suggestionsList: {
    maxHeight: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 6,
  },
  suggestionItem: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  suggestionText: {
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  saveButton: {
    backgroundColor: "#1E90FF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: "#ddd",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
