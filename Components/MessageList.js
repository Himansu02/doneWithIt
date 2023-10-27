import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
} from "react-native";
import ListItem from "./CustomComponents/ListItem";
import Constants from "expo-constants";
import Screen from "./CustomComponents/Screen";
import ListItemSeparator from "./CustomComponents/ListItemSeparator";
import ListItemDeleteAction from "./CustomComponents/ListItemDeleteAction";

const m = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum sed. Semper auctor neque vitae tempus. Lacus viverra vitae congue eu consequat ac felis donec. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Nulla facilisi morbi tempus iaculis. Habitant morbi tristique senectus et netus et malesuada. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Vitae congue eu consequat ac. Cras adipiscing enim eu turpis egestas. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Bibendum neque egestas congue quisque egestas diam in arcu.Nunc mi ipsum faucibus vitae aliquet nec. Proin libero nunc consequat interdum varius. Etiam erat velit scelerisque in dictum non consectetur a erat. Proin nibh nisl condimentum id venenatis a. Congue eu consequat ac felis donec et. Id velit ut tortor pretium viverra suspendisse potenti nullam. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Diam sollicitudin tempor id eu nisl nunc. Scelerisque viverra mauris in aliquam sem fringilla. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Nunc id cursus metus aliquam eleifend mi in. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Sit amet luctus venenatis lectus. Eget gravida cum sociis natoque penatibus. Ac auctor augue mauris augue neque gravida. Ut aliquam purus sit amet luctus venenatis lectus.",
    description: "description1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "user2",
    description: "description2",
    image: require("../assets/mosh.jpg"),
  },
];

const MessageList = () => {
  const [messageArray, setMessageArray] = useState(m);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (item) => {
    const newMessayArray = messageArray.filter((ele) => ele.id !== item.id);

    setMessageArray(newMessayArray);
  };

  return (
      <FlatList
        data={messageArray}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => console.log()}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => setMessageArray([
          {
            id: 2,
            title: "user2",
            description: "description2",
            image: require("../assets/mosh.jpg"),
          },
        ])}
      />
  );
};

export default MessageList;
