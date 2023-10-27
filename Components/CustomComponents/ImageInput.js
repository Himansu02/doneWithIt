import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import colors from "../config/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const ImageInput = ({ imageUri, onChageImage }) => {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();

    if (!granted) alert("You need to enable Permission!");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const handlePress = async () => {
    if (!imageUri) selectedImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete ?", [
        { text: "Yes", onPress: () => onChageImage() },
        { text: "No" },
      ]);
  };

  const selectedImage = async () => {
    try {
      const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
        allowsEditing:true
      });
      if (canceled) return;
      onChageImage(assets[0].uri);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={30}
            color={colors.medium}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
