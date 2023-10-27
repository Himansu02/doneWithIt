import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../Components/ListingScreen";
import ListingDetailScreen from "../Components/ListingDetailScreen";
import route from "./route";

const Stack=createStackNavigator()

const FeedNavigator=()=>(
    <Stack.Navigator>
        <Stack.Screen name={route.LISTINGS} component={ListingScreen} options={{
            headerShown:false
        }}/>
        <Stack.Screen name={route.LISTING_DETAILS} component={ListingDetailScreen}/>
    </Stack.Navigator>
)

export default FeedNavigator;