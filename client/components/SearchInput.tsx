import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useFonts, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { AntDesign, Ionicons } from '@expo/vector-icons';


const SearchInput = () => {
     let [fontsLoaded, fontError] = useFonts({
          Nunito_700Bold,
     });
     if (!fontError && !fontsLoaded) {
          return null;
     }
     return (
          <View style={styles.filteringContainer}>
               <View style={styles.searchContainer}>
                    <TextInput
                         style={[styles.input, { fontFamily: "Nunito_700Bold" }]}
                         placeholder='Search'
                         placeholderTextColor={"#c6&cc"}
                    />
                    <TouchableOpacity style={styles.searchIconContainer}>
                         <AntDesign name='search1' size={20} color={"#fff"} />
                    </TouchableOpacity>
               </View>
          </View>
     )
}

export default SearchInput

const styles = StyleSheet.create({
     filteringContainer: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 16,
     },

     searchContainer: {
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 5,
          paddingHorizontal: 10,
          // marginRight: 10,
     },

     searchIconContainer: {
          width: 36,
          height: 36,
          backgroundColor: "#2467EC",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 4,
     },

     input: {
          flex: 1,
          fontSize: 14,
          color: "black",
          paddingVertical: 10,
          paddingHorizontal: 10,
          width: 271,
          height: 48,
     },
})