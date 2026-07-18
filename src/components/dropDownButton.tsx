import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { Pressable, StyleSheet, Text, View } from "react-native";

type DropDownButtonProps = {
  content: string;
};

export default function DropDownButton({ content }: DropDownButtonProps) {
  return (
    <Pressable style={styles.dropDownMenu}>
      <View style={{ flexDirection: "row", gap: 5 }}>
        <AntDesign name="environment" size={24} color="green" />
        <Text style={styles.contextText}>{content}</Text>
      </View>
      <Entypo name="chevron-thin-down" size={20} color="#B7B7B7" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  contextText: {
    fontSize: 20,
    fontFamily: "Nunito",
  },
  dropDownMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 57,
    alignSelf: "stretch",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#B7B7B7",
    gap: 5,
    paddingHorizontal: 20,
  },
});
