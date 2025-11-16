import Header from "@/components/Header";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      edges={{ bottom: "off", top: "additive" }} // These are individual settings for managing the clipping area from top/bottom of mobile screens
    >
      <Stack>
        <Stack.Screen
          name="index"
          options={{ header: () => <Header title="Home" /> }}
        />
      </Stack>
    </SafeAreaView>
  );
}
