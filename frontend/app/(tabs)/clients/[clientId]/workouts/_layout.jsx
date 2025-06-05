import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack screenOptions={{ headShown: false }}>
      <Stack.Screen
        name="new-workout"
        options={{ title: "New Workout", headerShown: false }}
      />
      <Stack.Screen
        name="workout-history"
        options={{ title: "Workout History", headerShown: false }}
      />
      <Stack.Screen
        name="lift-log"
        options={{ title: "Lift Log", headerShown: false }}
      />
    </Stack>
  );
};

export default _layout;
