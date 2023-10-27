import React from 'react';
import { View,StyleSheet, Text } from 'react-native';
import colors from '../config/Colors';
import Constants  from 'expo-constants'
import { useNetInfo } from '@react-native-community/netinfo';

const OfflineNotice = () => {

    const netinfo=useNetInfo()

    if(netinfo.type !== "unknown" && netinfo.isInternetReachable === false)
    {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>No Internet Connection.</Text>
            </View>
        )
    }
    return null;
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        width:"100%",
        alignItems:"center",
        padding:10
    },
    text:{
        color:colors.white
    }
})

export default OfflineNotice