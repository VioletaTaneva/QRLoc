import React from "react";
import { View } from "react-native";
import PickYourImage from "./components/ImagePicker";
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <PickYourImage />
    </View>
  );
}
