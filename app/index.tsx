import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>PRism</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#0D0D0D'
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center'
  },
  titleText: {
    fontSize: 40,
    padding: 5,
    color: '#1E90FF'
  },
});
