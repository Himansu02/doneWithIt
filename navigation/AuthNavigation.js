import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Components/Home";
import LoginScreen from "../Components/LoginScreen";
import RegisterScreen from "../Components/RegisterScreen";

const Stack=createStackNavigator()

const AuthNavigator=()=>(
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Home} options={{
            headerShown:false
        }}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
    </Stack.Navigator>
)

export default AuthNavigator