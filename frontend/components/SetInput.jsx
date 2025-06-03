import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Pressable,
  Text,
  StyleSheet,
} from "react-native";


export default function SetInput({
  placeholder,
  value,
  onChange,
  type,
  workingExercises = [],
  unit,
  setUnit,
}) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const isExerciseInput = placeholder.toLowerCase() === "exercise";
  const isWeightInput = placeholder.toLowerCase() === "weight";

  const filteredSuggestions = workingExercises.filter(
    (ex) => ex.toLowerCase().includes(value.toLowerCase()) && value.length > 0
  );

  const handleSelect = (exercise) => {
    onChange(exercise); // updates the parent input value
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
            onChange(text); // update live input
            if (isExerciseInput) setShowSuggestions(true);
          }}
          onBlur={() => {
            setTimeout(() => setShowSuggestions(false), 100); // delay so FlatList tap can register
          }}
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
          keyboardShouldPersistTaps="handled"
          renderItem={({ item }) => (
            <Pressable
              onPress={() => handleSelect(item)}
              style={styles.suggestionItem}
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
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    padding: 5,
  },
  inputText: {
    flex: 1,
    fontSize: 18,
    color: "#333",
  },
  suggestionsList: {
    backgroundColor: "#f9f9f9",
    maxHeight: 150,
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1,
    marginTop: 4,
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
