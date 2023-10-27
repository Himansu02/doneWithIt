import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/Colors'

const AppTextInput = ({icon,...otherProp}) => {
  return (
    <View style={styles.container}>
        {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={30} color={colors.medium}/>}
        <TextInput style={styles.textInput} {...otherProp} placeholderTextColor={colors.medium}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        padding:15,
        backgroundColor:colors.light,
        flexDirection:"row",
        borderRadius:20,
        alignItems:"center",
        marginVertical:10
    },
    icon:{
        marginRight:10
    },
    textInput:{
        fontSize:18,
        color:colors.dark
    }
})

export default AppTextInput