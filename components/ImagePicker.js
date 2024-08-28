import React, { useState, useEffect } from "react";
import { Text, View, Button, Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function PickYourImage() {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(status === "granted");
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  if (hasGalleryPermission === false) {
    return <Text style={styles.noAccessText}>No access to gallery</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Favorite image?</Text>
        <Text style={styles.description}>
          Browse through your gallery and pick one of your favorite images!
        </Text>
      </View>
      <View style={styles.imageButtonContainer}>
        {image && (
          <Image
            source={{ uri: image }}
            style={styles.image}
            resizeMode="cover"
          />
        )}
        <Button
          title="Pick Image"
          onPress={pickImage}
          color="#007bff"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 10,
    marginTop: 15,
    marginBottom: 5,
    marginHorizontal: 5,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 3,
  },
  description: {
    fontSize: 15,
  },
  imageButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 5,
  },
  noAccessText: {
    textAlign: "center",
    marginTop: 20,
  },
});
