import { useDeliveryStore } from "@/store/Store";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-paper";
import { useShallow } from "zustand/react/shallow";

export default function CastomParcelSize() {
  const { selectedSize, setExactDimensions } = useDeliveryStore(
    useShallow((state) => ({
      selectedSize: state.selectedSize,
      setExactDimensions: state.setExactDimensions,
    })),
  );
  const [length, setLength] = useState(
    selectedSize?.isCustom ? String(selectedSize.length) : "",
  );
  const [width, setWidth] = useState(
    selectedSize?.isCustom ? String(selectedSize.width) : "",
  );
  const [height, setHeight] = useState(
    selectedSize?.isCustom ? String(selectedSize.height) : "",
  );
  const [errors, setErrors] = useState<{
    length?: string;
    width?: string;
    height?: string;
  }>({});
  const [isSaved, setIsSaved] = useState(selectedSize?.isCustom ? true : false);

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!length.trim() || Number(length) === 0) {
      newErrors.length = "Вкажіть довжину";
    }
    if (!width.trim() || Number(width) === 0) {
      newErrors.width = "Вкажіть ширину";
    }
    if (!height.trim() || Number(height) === 0) {
      newErrors.height = "Вкажіть висоту";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validate()) {
      setIsSaved(false);
      return;
    }

    setExactDimensions(Number(length), Number(width), Number(height));
    setIsSaved(true);
  };

  const handleChange = (setter: (v: string) => void) => (text: string) => {
    setter(text);
    if (isSaved) setIsSaved(false);
  };

  return (
    <View style={styles.area}>
      <View style={styles.fields}>
        <Text style={styles.text}>Довжина</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChange(setLength)}
          value={length}
          placeholder="см"
          keyboardType="numeric"
        />
        {errors.length && <Text style={styles.error}>{errors.length}</Text>}
        <Text style={styles.text}>Ширина</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChange(setWidth)}
          value={width}
          placeholder="см"
          keyboardType="numeric"
        />
        {errors.width && <Text style={styles.error}>{errors.width}</Text>}
        <Text style={styles.text}>Висота</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChange(setHeight)}
          value={height}
          placeholder="см"
          keyboardType="numeric"
        />
        {errors.height && <Text style={styles.error}>{errors.height}</Text>}
      </View>
      <Button
        buttonColor="green"
        icon={isSaved ? "check" : ""}
        mode="contained"
        onPress={handleSave}
        style={styles.button}
        labelStyle={styles.text}
        disabled={isSaved}
      >
        {!isSaved ? "Застосувати" : "Збережено"}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    justifyContent: "space-between",
  },
  fields: {
    gap: 5,
  },
  input: {
    height: 45,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: "Nunito",
  },
  castbutton: {
    height: 50,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#2E7D32",
    marginBottom: 20,
  },
  button: {
    justifyContent: "center",
    height: 50,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonDone: {
    backgroundColor: "#5B9E60",
  },
  buttonText: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
    fontFamily: "Nunito",
    color: "#fff",
    fontWeight: "600",
  },
  error: {
    fontSize: 13,
    color: "#D32F2F",
    fontFamily: "Nunito",
    textAlign: "right",
  },
});
