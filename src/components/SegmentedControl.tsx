import { Pressable, StyleSheet, Text, View } from "react-native";

type SegmentedControlProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export default function SegmentedControl({
  options,
  value,
  onChange,
}: SegmentedControlProps) {
  return (
    <View style={styles.container}>
      {options.map((option) => {
        const isActive = option === value;
        return (
          <Pressable
            key={option}
            style={[styles.segment, isActive && styles.segmentActive]}
            onPress={() => onChange(option)}
          >
            <Text style={[styles.text, isActive && styles.textActive]}>
              {option}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#EDEDED",
    borderRadius: 100,
    padding: 4,
  },
  segment: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 100,
    alignItems: "center",
  },
  segmentActive: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2, // тень на Android
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    color: "#8A8A8A",
  },
  textActive: {
    color: "#000000",
    fontWeight: "600",
  },
});
