import Banner from "@/components/banner";
import DropDownButton from "@/components/dropDownButton";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function StartPage() {
  const [postCity, SetPostCity] = useState<string>("Місто відправки");
  const [getCity, SetGetCity] = useState<string>("Місто призначення");
  const [sizeParcel, SetSizeParcel] = useState<string>("Не вказаний");
  return (
    <View style={styles.page}>
      <Text style={styles.text}>Місто відправки</Text>
      <DropDownButton content={postCity} />
      <Text style={styles.text}>Місто призначення</Text>
      <DropDownButton content={getCity} />
      <Text style={styles.text}>Розмір посилки</Text>
      <DropDownButton content={sizeParcel} />
      <Banner />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 24,
    paddingBottom: 10,
    /*justifyContent: "center",
    alignItems: "center",*/
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
