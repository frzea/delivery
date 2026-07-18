import { Image } from "react-native";

type ImageBoxProps = {
  width: number;
  height: number;
  top: number;
  left: number;
};

export default function ImageBox({ width, height, top, left }: ImageBoxProps) {
  return (
    <Image
      source={require("../image/boxs.png")}
      style={{
        position: "absolute",
        width: width,
        height: height,
        top: top,
        left: left,
        transform: [{ rotate: "-10.18deg" }],
      }}
    />
  );
}
