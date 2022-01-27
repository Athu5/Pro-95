import React from "react";
import {View, SafeAreaView, Text, StyleSheet, Image, TextInput, TouchableOpacity, TouchableOpacityBase, Alert } from "react-native";


const Favorite = (props)=>{

    const { favItems, onRemove } = props;
  
    return(
        <SafeAreaView style = {{
            flex:1,
            paddingHorizontal:20,
            backgroundColor:"white",
        }}>

            { favItems.map((item,index)=>(
                <View style = {{flexDirection :"row" }}>
                    <Text>{item.name}</Text>
                    <TouchableOpacity onPress={() => onRemove(item)}>
                        <Text> Remove From Favorites </Text>
                    </TouchableOpacity>
                    <Text>{}</Text>
                </View>
            ))}
            
        </SafeAreaView>
    )
} 
const styles = StyleSheet.create({
    
header: {marginTop: 30,
         flexDirection: "row", 
         justifyContent: "space-between" },
})
export default Favorite ;