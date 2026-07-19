import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "Nunito",
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Розрахунок доставки",
          //headerShown: false,
        }}
      />
      <Tabs.Screen name="history" />
    </Tabs>
  );
}
