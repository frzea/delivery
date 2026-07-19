import Entypo from "@expo/vector-icons/Entypo";
import { ReactElement } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type DropDownButtonProps = {
  content: string;
  icon?: ReactElement;
  onPress?: () => void;
};

export default function DropDownButton({
  content,
  icon,
  onPress,
}: DropDownButtonProps) {
  return (
    <Pressable style={styles.dropDownMenu} onPress={onPress}>
      <View style={{ flexDirection: "row", gap: 5 }}>
        {icon}
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
