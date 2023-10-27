import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";

const Card = ({ title, price, imageUrl, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          uri={imageUrl}
          style={styles.image}
          tint="light"
          preview={{
            uri: "https://images.pexels.com/photos/579353/pexels-photo-579353.jpeg?cs=srgb&dl=blur-background-579353.jpg&fm=jpg",
          }}
        />
        <View style={styles.detailContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{price}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "white",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
  },
  subTitle: {
    color: "dodgerblue",
    fontWeight: "bold",
  },
});

export default Card;
