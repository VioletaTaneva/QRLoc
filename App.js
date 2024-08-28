import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PickYourImage from './components/PickYourImage';
import LocationFinder from './components/LocationFinder';
export default function App() {
  return (
    <View style={styles.container}>
      <PickYourImage />
      <LocationFinder />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
