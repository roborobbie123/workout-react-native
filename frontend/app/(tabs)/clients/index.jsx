import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useTrainer } from "../../../context/TrainerContext";
import ClientsList from "../../../components/ListOfClients";
import { useRouter } from "expo-router";

export default function ClientList() {
  const { clientList, setSelectedClient } = useTrainer();
  const router = useRouter();

  const [searchText, setSearchText] = useState("");
  const [filteredClients, setFilteredClients] = useState(clientList);

  useEffect(() => {
    if (searchText === "") {
      setFilteredClients(clientList);
    } else {
      const filtered = clientList.filter((client) =>
        client.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredClients(filtered);
    }
  }, [searchText, clientList]);

  const onPress = (client) => {
    setSelectedClient(client);
    router.push(`/clients/${client.id}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        {/* Banner */}
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Clients</Text>
        </View>

        {/* Main Content */}
        <View style={styles.content}>
          <View style={styles.searchContainer}>
            <Ionicons
              name="search"
              size={20}
              color="#888"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search clients"
              value={searchText}
              onChangeText={setSearchText}
              placeholderTextColor="#888"
            />
          </View>

          <ClientsList clients={filteredClients} onClientPress={onPress} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

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
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#000",
  },
});
