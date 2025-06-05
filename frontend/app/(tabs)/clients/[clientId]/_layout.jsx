import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Client Details", headerShown: false }}
      />
      <Stack.Screen
        name="workouts"
        options={{ title: "Workouts", headerShown: false }}
      />
    </Stack>
  );
};

export default _layout;
