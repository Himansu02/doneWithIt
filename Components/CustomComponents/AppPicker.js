import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/Colors";
import PickerItem from "./PickerItem";

const AppPicker = ({
  icon,
  placeholder,
  items,
  PickerItemComponent=PickerItem,
  selectedItem,
  onSelectItem,
  numOfColumns=1
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon}
              size={30}
              color={colors.medium}
            />
          )}
          {selectedItem ? (
            <Text style={styles.text}>{selectedItem}</Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={30}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="close" onPress={() => setModalVisible(false)} />
        <FlatList
          key={numOfColumns}
          numColumns={numOfColumns}
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PickerItemComponent
              item={item}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item.label);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    backgroundColor: colors.light,
    flexDirection: "row",
    borderRadius: 20,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    fontSize: 18,
    color: colors.dark,
  },
  text: {
    flex: 1,
  },
  placeholder:{
    color:colors.medium,
    flex:1,
    fontSize:18
  }
});

export default AppPicker;
