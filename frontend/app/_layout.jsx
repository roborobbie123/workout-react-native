import { Stack } from "expo-router";
import { TrainerProvider } from "../context/TrainerContext.js";

export default function RootLayout() {
  return (
    <TrainerProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </TrainerProvider>
  );
}
