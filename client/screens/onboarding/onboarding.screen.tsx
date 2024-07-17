import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "@/styles/onboarding/onboarding";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

const OnBoardingScreen = () => {
  let [fontLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  });
  const router = useRouter();

  if (!fontError && !fontLoaded) {
    return null;
  }
  return (
    <>
    <LinearGradient
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
      colors={["#e5ecf9", "#f6f7f9"]}
    >
      <View style={styles.firstContainer}>
        <View>
          <Image source={require("@/assets/logo.png")} style={styles.logo} />
          <Image source={require("@/assets/onboarding/shape_9.png")} />
        </View>
        <View style={styles.titleWrapper}>
          <Image
            source={require("@/assets/onboarding/shape_3.png")}
            style={styles.titleTextShape1}
          />
          <Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
            Start Learing with
          </Text>
          <Image
            source={require("@/assets/onboarding/shape_2.png")}
            style={styles.titleTextShape2}
          />
        </View>
        <View>
          <Image
            source={require("@/assets/onboarding/shape_6.png")}
            style={styles.titleShape3}
          />
          <Text style={[styles.titleText, { fontFamily: "Raleway_700Bold"}]}>Youdemy</Text>
        </View>
        <View style={styles.dscpWrapper}>
          <Text style={[styles.dscpText, {fontFamily: "Nunito_400Regular"}]}>
            Explore a variety of interactive lesson,
          </Text>
          <Text style={[styles.dscpText,{ fontFamily: "Nunito_400Regular"}]}>
            Video, quizze & assignments.
          </Text>
        </View>
        <TouchableOpacity onPress={()=> router.push("/(routes)/welcome-intro")} style={styles.buttonWrapper}>
            <Text style={[styles.buttonText,{fontFamily: "Nunito_700Bold"}]}>
              Getting started
            </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
    <StatusBar  style="dark"/>
    </>
  );
};

export default OnBoardingScreen;
