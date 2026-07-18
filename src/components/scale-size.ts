import { Dimensions } from "react-native";

export default function Scale(size: number) {
  const { width: SCREEN_WIDTH } = Dimensions.get("window");
  const FIGMA_WIDTH = 360; // ширина макета в Figma

  return (SCREEN_WIDTH / FIGMA_WIDTH) * size;
}
