import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "./Icon";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon name={item.icon} backgroundColor={item.backgroundColor} />
        <Text style={styles.label}>{item.label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
  },
});

export default CategoryPickerItem;
