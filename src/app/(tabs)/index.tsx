import ModalChooseParcel from "@/app/modal";
import Banner from "@/components/banner";
import DropDownButton from "@/components/dropDownButton";
import { useDeliveryStore } from "@/store/Store";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function StartPage() {
  const store = useDeliveryStore();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.page}>
      <Text style={styles.text}>Місто відправки</Text>
      <DropDownButton
        content={store.postCity}
        icon={<AntDesign name="environment" size={24} color="green" />}
        onPress={() =>
          router.push({
            pathname: "/city-picker",
            params: { mode: "from", title: "Місто відправки" },
          })
        }
      />
      <Text style={styles.text}>Місто призначення</Text>
      <DropDownButton
        content={store.getCity}
        icon={<AntDesign name="environment" size={24} color="green" />}
        onPress={() =>
          router.push({
            pathname: "/city-picker",
            params: { mode: "to", title: "Місто призначення" },
          })
        }
      />
      <Text style={styles.text}>Розмір посилки</Text>
      <DropDownButton
        content={store.sizeParcel}
        onPress={() => setModalVisible(true)}
      />
      <Banner />
      <ModalChooseParcel
        visible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 24,
    paddingBottom: 10,
    gap: 20,
  },
  text: {
    fontSize: 18,
    paddingHorizontal: 10,
    fontFamily: "Nunito",
    fontWeight: "bold",
  },
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
  textButtom: {
    fontSize: 25,
  },
});
