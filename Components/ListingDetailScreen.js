import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ListItem from "./CustomComponents/ListItem";
import { Image } from "react-native-expo-image-cache";

const ListingDetailScreen = ({ route }) => {
  const listings = route.params;

  return (
    <View>
      <Image
        style={styles.image}
        uri={listings.images[0].url}
        preview={{
          uri: "https://images.pexels.com/photos/579353/pexels-photo-579353.jpeg?cs=srgb&dl=blur-background-579353.jpg&fm=jpg",
        }}
      />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{listings.title}</Text>
        <Text style={styles.subTitle}>${listings.price}</Text>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Ulla"
          subTitle="5 Listings"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailContainer: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    color: "dodgerblue",
  },
});

export default ListingDetailScreen;
