import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "./CustomComponents/AppButton";

const Home = ({navigation}) => {
  return (
    <ImageBackground
      blurRadius={8}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell what you don't want</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="login" onPress={()=>navigation.navigate("Login")} />
        <AppButton title="Register" onPress={()=>navigation.navigate("Register")}/>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingTop: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  buttonContainer:{
    width:"100%",
    padding:10
  }
});

export default Home;
