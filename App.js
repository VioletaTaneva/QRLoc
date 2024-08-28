import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import PickYourImage from "./components/PickYourImage";
import ContinentFinder from "./components/ContinentFinder";
import LocationFinder from "./components/LocationFinder";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={styles.section}>
          <PickYourImage />
        </View>
        <View style={styles.section}>
          <ContinentFinder />
        </View>
        <View style={styles.section}>
          <LocationFinder />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  section: {
    width: "100%",
    marginBottom: 20, 
  },
});

