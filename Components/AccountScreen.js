import React, { useContext } from "react";
import { FlatList, View, StyleSheet, Alert } from "react-native";
import ListItem from "./CustomComponents/ListItem";
import Icon from "./CustomComponents/Icon";
import colors from "./config/Colors";
import ListItemSeparator from "./CustomComponents/ListItemSeparator";
import UserContext from "../utility/context/userContex";

const listItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "MessageList",
  },
];

const AccountScreen = ({ navigation }) => {
  const { user, setUser } = useContext(UserContext);

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.container, { marginTop: 0 }]}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={listItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Logout"
          ImageComponent={
            <Icon
              name="logout"
              backgroundColor="#ffe663"
              
            />
          }
          onPress={() =>( Alert.alert("Logout","Are you sure you want to logout?",[
            {text:"Yes",onPress:()=>setUser(null)},
            {text:"No"}
          ]))}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    backgroundColor: colors.white,
  },
  mainContainer: {
    backgroundColor: colors.light,
    height: "100%",
  },
});

export default AccountScreen;
