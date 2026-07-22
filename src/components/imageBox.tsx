import { Image } from "react-native";

type ImageBoxProps = {
  position: "absolute" | "relative" | "static";
  width: number;
  height: number;
  top: number;
  left: number;
};

export default function ImageBox({
  position,
  width,
  height,
  top,
  left,
}: ImageBoxProps) {
  return (
    <Image
      source={require("../image/boxs.png")}
      style={{
        position: position,
        width: width,
        height: height,
        top: top,
        left: left,
        transform: [{ rotate: "-10.18deg" }],
      }}
    />
  );
}
