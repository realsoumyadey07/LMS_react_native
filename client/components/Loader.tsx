import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Loader = () => {
  return (
    <LinearGradient 
    colors={["#e5ecf9", "#f6f7f9"]}
    style={{flex: 1, justifyContent: "center", alignItems: "center"}}
    >
     
    </LinearGradient>
  )
}

export default Loader

const styles = StyleSheet.create({})