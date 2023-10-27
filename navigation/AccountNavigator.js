import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../Components/AccountScreen";
import MessageList from "../Components/MessageList";


const Stack=createStackNavigator()

const AccountNavigator=()=>(
    <Stack.Navigator>
        <Stack.Screen name="AccountScreen" component={AccountScreen} options={{
            headerShown:false
        }}/>
        <Stack.Screen name="MessageList" component={MessageList}/>
    </Stack.Navigator>
)

export default AccountNavigator;