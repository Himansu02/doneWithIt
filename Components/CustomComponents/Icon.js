import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({
  name,
  size = 50,
  backgroundColor = "#000",
  iconColor = "#fff",
}) => {
  return (
    <View
      style={{
        backgroundColor,
        height: size,
        width: size,
        borderRadius: size / 2,
        alignItems: "center",
        justifyContent:"center"
      }}
    >
      <MaterialCommunityIcons name={name} size={size*0.5} color={iconColor}/>
    </View>
  );
};

export default Icon;
