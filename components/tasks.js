import React from 'react'
import { Text,StyleSheet,View, TouchableOpacity } from 'react-native'

const Task=(props)=>{

    return(
        <View style={styles.items}>
            <View style={styles.itemsLeft}>
                <TouchableOpacity style={styles.sqaure}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circle}></View>
        </View>
    )
}

const styles= StyleSheet.create({
    items:{
        backgroundColor:'#FFF',
        padding:10,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:20
    },
    itemsLeft:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    sqaure:{
        height:24,
        width:24,
        backgroundColor:'#55BCF6',
        borderRadius:5,
        opacity:0.4,
        marginRight:15
    },
    circle:{
        height:12,
        width:12,
        borderColor:'#55BCF6',
        borderWidth:2,
        borderRadius:10
    }

})

export default Task