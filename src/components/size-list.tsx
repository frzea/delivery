import { PARCEL_SIZES } from "@/constants/parcelSizes";
import { useDeliveryStore } from "@/store/Store";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import ImageBox from "./imageBox";

export default function ParcelSizeList() {
  const selectedSize = useDeliveryStore((store) => store.selectedSize);
  const setSelectedSize = useDeliveryStore((store) => store.setSelectedSize);

  type ParcelSize = (typeof PARCEL_SIZES)[number];
  type ItemProps = {
    item: ParcelSize;
  };

  const Item = ({ item }: ItemProps) => (
    <Pressable
      style={styles.itemStyle}
      onPress={() => {
        setSelectedSize({
          id: item.id,
          name: item.name,
          length: item.length,
          width: item.width,
          height: item.height,
          isCustom: false,
        });
      }}
    >
      <View style={styles.content}>
        <ImageBox position="static" width={100} height={110} top={0} left={0} />
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subtitle}>
            {`${item.length}x${item.width}x${item.height} см`}
          </Text>
        </View>
        {selectedSize?.id === item.id && <View style={styles.check}></View>}
      </View>
    </Pressable>
  );

  return (
    <FlatList
      data={PARCEL_SIZES}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ gap: 20 }}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },
  itemStyle: {
    alignContent: "center",
    height: 130,
    borderWidth: 1,
    borderRadius: 16,
  },
  textWrapper: {
    flex: 1,
    paddingHorizontal: 10,
    gap: 12,
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontFamily: "Nunito",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "Nunito",
    fontWeight: "400",
    color: "#4A4A4A",
  },
  check: {
    borderWidth: 1,
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: "black",
  },
});
