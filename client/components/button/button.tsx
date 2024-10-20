import { commonStyles } from "@/styles/common/common.styles";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({title, onPress}: {title: string, onPress: ()=> void}){
     return (
          <TouchableOpacity 
          style={styles.buttonWrapper}
          onPress={()=> onPress()}
          >
               <Text style={styles.buttonText}>{title}</Text>
          </TouchableOpacity>
     )
}

const styles = StyleSheet.create({
     buttonText: {
          color: "white",
          textAlign: "center",
          fontSize: 16,
          fontFamily: "Nunito_600SemiBold",
     },
     buttonWrapper: {
          backgroundColor: "#4672FF",
          borderRadius: 5,
          padding: 16,
          width: "90%",
          alignSelf: "center",
          justifyContent: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          marginBottom: 100,
     },
})