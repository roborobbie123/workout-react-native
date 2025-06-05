import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import { useTrainer } from "../../../context/TrainerContext";

const Profile = () => {
  const { activeUser, setActiveUser } = useTrainer();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Your Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Profile Info */}
        <View style={styles.profileInfo}>
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>
              {activeUser.name.charAt(0).toUpperCase()}
            </Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{activeUser.name}</Text>
            <Text style={styles.userEmail}>{activeUser.email}</Text>
            <Text style={styles.userRole}>{activeUser.role.toUpperCase()}</Text>
          </View>
        </View>

        {/* Settings */}
        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Settings</Text>

          <TouchableOpacity style={styles.settingItem} onPress={() => {router.push(`/profile/edit-profile`)}}>
            <Text style={styles.settingText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.settingItem, styles.logoutItem]}>
            <Text style={[styles.settingText, styles.logoutText]}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f8fa",
  },
  banner: {
    backgroundColor: "#1E90FF", // original blue banner
    paddingTop: 50,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
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
    padding: 24,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 36,
  },
  avatarPlaceholder: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#1E90FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  avatarText: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
  },
  userInfo: {
    flexShrink: 1,
  },
  userName: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
  },
  userEmail: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
  userRole: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: "600",
    color: "#1E90FF",
    backgroundColor: "#e6f0fc",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  settingsSection: {
    paddingTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
    color: "#444",
  },
  settingItem: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  settingText: {
    fontSize: 16,
    color: "#333",
  },
  logoutItem: {
    backgroundColor: "#ffeaea",
  },
  logoutText: {
    color: "#D9534F",
    fontWeight: "600",
  },
});
