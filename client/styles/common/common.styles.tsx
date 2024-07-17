import { StyleSheet } from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#2467ec",
    width: responsiveWidth(88),
    height: responsiveHeight(2.5),
    borderRadius: 5,
    marginHorizontal: 5
  },
  dotStyle: {
    backgroundColor: "#518afc",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDotStyle: {
    backgroundColor: "#2467ec",
    width: 12,
    height: 12,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  title: {
    fontSize: hp("3.5%"),
    textAlign: "center"
  },
  description: {
     fontSize: hp("2.2%"),
     color: "#575757",
     textAlign: "center"
  },
  input: {
    height: 55,
    marginHorizontal: 16,
    borderRadius: 8,
    paddingLeft: 20,
    fontSize: 16,
    backgroundColor: "white",
    color: "#a1a1a1"
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    gap: 7,
    marginTop: 10
  }
});
