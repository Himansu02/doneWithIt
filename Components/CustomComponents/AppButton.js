import React from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../config/Colors'

const AppButton = ({title,onPress,loading}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        {!loading && <Text style={styles.text}>{title}</Text>}
        {loading && <ActivityIndicator size="large" color={colors.white}/>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        borderRadius:20,
        backgroundColor:colors.primary,
        justifyContent:"center",
        alignItems:"center",
        padding:15,
        marginVertical:10
    },
    text:{
        color:"white",
        textTransform:"uppercase",
        fontSize:18,
        fontWeight:"600"
    }
})

export default AppButton