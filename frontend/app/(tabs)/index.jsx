import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Home</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.placeholderText}>
          An app for personal trainers
        </Text>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f8fa",
  },
  banner: {
    backgroundColor: "#1E90FF", // DodgerBlue
    paddingTop: 50,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3, // shadow on Android
    shadowColor: "#000", // shadow on iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  bannerText: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 18,
    color: "#999",
    fontStyle: "italic",
    textAlign: "center",
  },
});
