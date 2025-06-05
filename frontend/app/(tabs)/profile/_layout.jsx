import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Profile",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="edit-profile"
        options={{
          title: "Edit Profile",
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="notifications"
        options={{
          title: "Notifications",
          headerShown: false,
        }}
      />
      
    </Stack>
  );
};

export default _layout;
