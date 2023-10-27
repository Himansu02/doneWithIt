import {
  StyleSheet,
} from "react-native";

import Screen from "./Components/CustomComponents/Screen";

import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./navigation/AuthNavigation";
import NavigationTheme from "./navigation/NavigationTheme";
import AppNavigator from "./navigation/AppNavigation";
import OfflineNotice from "./Components/CustomComponents/OfflineNotice";
import UserContext from "./utility/context/userContex";


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
