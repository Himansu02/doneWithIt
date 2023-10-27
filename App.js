import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Alert,
  SafeAreaView,
  Button,
} from "react-native";
import Home from "./Components/Home";
import ViewImageScreen from "./Components/ViewImageScreen";
import MainPage from "./Components/MainPage";
import ListingDetailScreen from "./Components/ListingDetailScreen";
import MessageList from "./Components/MessageList";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Screen from "./Components/CustomComponents/Screen";
import Icon from "./Components/CustomComponents/Icon";
import colors from "./Components/config/Colors";
import ListItem from "./Components/CustomComponents/ListItem";
import AccountScreen from "./Components/AccountScreen";
import ListingScreen from "./Components/ListingScreen";
import AppTextInput from "./Components/CustomComponents/AppTextInput";
import AppPicker from "./Components/CustomComponents/AppPicker";
import { useEffect, useState } from "react";
import LoginScreen from "./Components/LoginScreen";
import ListingEditScreen from "./Components/ListingEditScreen";
import * as ImagePicker from "expo-image-picker";
import ImageInput from "./Components/CustomComponents/ImageInput";
import ImageInputList from "./Components/CustomComponents/ImageInputList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./navigation/AuthNavigation";
import NavigationTheme from "./navigation/NavigationTheme";
import AppNavigator from "./navigation/AppNavigation";
import OfflineNotice from "./Components/CustomComponents/OfflineNotice";
import { auth } from "./Firebase";
import UserContext from "./utility/context/userContex";
import storage from "./utility/storage";


export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Screen>
      <UserContext.Provider value={{ user, setUser }}>
        <OfflineNotice />
        <NavigationContainer theme={NavigationTheme}>
          {user ?<AppNavigator/>:<AuthNavigator />}
        </NavigationContainer>
      </UserContext.Provider>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
