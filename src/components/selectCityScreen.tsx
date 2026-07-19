import { useDeliveryStore } from "@/store/Store";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

const CITIES = [
  "Днепр",
  "Киев",
  "Харьков",
  "Одесса",
  "Кривой Рог",
  "Каменское",
];

export default function SelectCityScreen() {
  const { setCity } = useDeliveryStore();
  const params = useLocalSearchParams<{ mode: "from" | "to"; title: string }>();

  type ItemProps = { title: string };

  const Item = ({ title }: ItemProps) => (
    <Pressable
      style={styles.item}
      onPress={() => {
        setCity(params.mode, title);
        router.back();
      }}
    >
      <Text style={styles.text}>{title}</Text>
      <AntDesign name="double-right" size={24} color="#B7B7B7" />
    </Pressable>
  );

  return (
    <>
      <Stack.Screen
        options={{
          title: params.title,
          headerBackVisible: false, // убирает системную стрелку
          headerTitleAlign: "left",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: 24,
            fontFamily: "Nunito",
            fontWeight: "bold",
          },
          headerLeft: () => (
            <Pressable
              onPress={() => router.back()}
              hitSlop={10}
              style={{ marginRight: 8 }}
            >
              <AntDesign name="close" size={20} color="black" />
            </Pressable>
          ),
        }}
      />
      <View style={styles.listPage}>
        <FlatList
          data={CITIES}
          renderItem={({ item }) => <Item title={item} />}
          keyExtractor={(item) => item}
          contentContainerStyle={{ gap: 25 }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  listPage: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
    fontFamily: "Nunito",
  },
});
