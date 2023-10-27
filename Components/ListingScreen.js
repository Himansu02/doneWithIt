import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import Card from "./CustomComponents/Card";
import colors from "./config/Colors";
import route from "../navigation/route";
import axios from "axios";
import cache from "../utility/cache";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

const ListingScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);
  const [loading,setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const getListings = async () => {
      setLoading(true)
      const querySnapshot = await getDocs(collection(db, "listings"));
      if (!querySnapshot.empty) {
        const result=[]
        querySnapshot.forEach((doc) => {
          result.push({...doc.data(),id:doc.id})
        });

        setListings(result)

        cache.store("listing", result);
      } else {
        const data = cache.get("listing");
        setListings(data);
      }
      setLoading(false)
    };
    getListings();
  }, []);


  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" animating={loading}/>}
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            price={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(route.LISTING_DETAILS, item)}
          />
        )}
        refreshing={refreshing}
        onRefresh={()=>console.log()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.light,
    height: "100%",
  },
});

export default ListingScreen;
