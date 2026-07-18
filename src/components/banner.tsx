import { StyleSheet, Text, View } from "react-native";
import ImageBox from "./imageBox";

export default function Banner() {
  return (
    <View style={styles.banner}>
      <View style={styles.textBlock}>
        <Text style={styles.title}>1+1=3</Text>
        <Text style={styles.subtitle}>3-я доставка в подарок!</Text>
      </View>
      <ImageBox width={130} height={82} top={9} left={265} />
      <ImageBox width={170} height={105} top={30} left={275} />
      <ImageBox width={102} height={60} top={10} left={320} />
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: 120,
    backgroundColor: "#6AC66A",
    borderRadius: 24,
    position: "relative",
    overflow: "hidden",
    padding: 15,
    marginTop: "auto",
  },
  textBlock: {
    maxWidth: "75%",
  },
  title: {
    fontSize: 35,
    fontWeight: "700",
    color: "#fff",
  },
  subtitle: {
    fontSize: 20,
    color: "#fff",
    marginTop: 4,
  },
});
