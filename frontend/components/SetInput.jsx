import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Pressable,
  Text,
} from "react-native";

export default function SetInput({
  placeholder,
  value,
  onChange,
  type,
  workingExercises = [],
}) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const isExerciseInput = placeholder.toLowerCase() === "exercise";

  // Filter suggestions based on input text (case-insensitive)
  const filteredSuggestions = workingExercises.filter(
    (ex) =>
      ex.toLowerCase().includes(value.toLowerCase()) && value.length > 0
  );

  const handleSelect = (exercise) => {
    onChange(exercise);
    setShowSuggestions(false);
  };

  return (
    <View style={{ marginBottom: 12 }}>
      <View style={styles.setInput}>
        <TextInput
          style={styles.inputText}
          placeholder={placeholder}
          placeholderTextColor="#888"
          value={value}
          keyboardType={type}
          onChangeText={(text) => {
            onChange(text);
            if (isExerciseInput) setShowSuggestions(true);
          }}
          onBlur={() => setShowSuggestions(false)} // hide suggestions when input loses focus
          onFocus={() => {
            if (isExerciseInput && value.length > 0) setShowSuggestions(true);
          }}
        />
      </View>

      {isExerciseInput && showSuggestions && filteredSuggestions.length > 0 && (
        <FlatList
          style={styles.suggestionsList}
          data={filteredSuggestions}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <Pressable
              style={styles.suggestionItem}
              onPress={() => handleSelect(item)}
            >
              <Text style={styles.suggestionText}>{item}</Text>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  setInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  inputText: {
    fontSize: 18,
    color: "#333",
  },
  suggestionsList: {
    maxHeight: 120,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderTopWidth: 0,
    borderRadius: 8,
    marginTop: -8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  suggestionText: {
    fontSize: 16,
    color: "#333",
  },
});
