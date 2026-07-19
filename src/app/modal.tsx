import SegmentedControl from "@/components/SegmentedControl";
import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  visible: boolean;
  setModalVisible: (check: boolean) => void;
};

export default function ModalChooseParcel({ visible, setModalVisible }: Props) {
  const [sizeType, setSizeType] = useState<string>("Примерные");
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.backdrop}>
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={() => setModalVisible(false)}
        ></Pressable>
        <View style={styles.sheet}>
          <Text style={styles.text}>Розмір посилки</Text>
          <SegmentedControl
            options={["Примерные", "Точні"]}
            value={sizeType}
            onChange={setSizeType}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  sheet: {
    height: "70%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  text: {
    fontSize: 30,
    fontFamily: "Nunito",
    fontWeight: "bold",
  },
});
