import { StyleSheet } from "react-native";
import { 
     responsiveHeight, 
     responsiveWidth 
} from "react-native-responsive-dimensions";
import {
     widthPercentageToDP as wp,
     heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
     firstContainer: {
          alignItems: "center"
     },
     logo: {
          width: wp("23%"),
          height: hp("10%")
     },
     titleWrapper: {
          flexDirection: "row"
     },
     titleTextShape1: {
          position: "absolute",
          left: -28,
          top: -20
     },
     titleText: {
          fontSize: hp("4%"),
          textAlign: "center",
          fontWeight: 700
     },
     titleTextShape2: {
          position: "absolute",
          right: -40,
          top: -20
     },
     titleShape3: {
          position: "absolute",
          left: 60
     },
     dscpWrapper: {
          marginTop: 30
     },
     dscpText: {
          textAlign: "center",
          color: "#575757",
          fontSize: hp("2%"),
     },
     buttonWrapper: {
          backgroundColor: '#2467ec',
          width: wp("85%"),
          paddingVertical: 18,
          borderRadius: 5,
          marginTop: 35
     },
     buttonText: {
          color: "white",
          textAlign: "center"
     },
     slideImage: {
          alignSelf: "center",
          marginBottom: 30
     },
     welcomeButtonStyle: {
          backgroundColor: "#2467ec",
          width: responsiveWidth(88),
          height: responsiveHeight(5.5),
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5
     }
})