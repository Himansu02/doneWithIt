import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "./config/Colors";
import {MaterialCommunityIcons} from "@expo/vector-icons"

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.action,styles.leftBox]}>
        <MaterialCommunityIcons name="close" color="white" size={30}/>
      </View>
      <View style={[styles.action,styles.rightBox]}>
        <MaterialCommunityIcons name="delete" color="white" size={30}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
    width: "100%",
  },
  container:{
    flex:1,
    backgroundColor:colors.black
  },
  action:{
    position:"absolute",
  },
  leftBox:{
    top:50,
    left:20,
  },
  rightBox:{
    top:50,
    right:30,
  }
});

export default ViewImageScreen;
