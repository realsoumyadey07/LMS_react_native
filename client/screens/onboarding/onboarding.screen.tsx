import React from "react";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Nunito_700Bold, Nunito_400Regular } from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { onboardingStyles } from "@/styles/onboarding/onboarding";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

export default function OnboardingScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <LinearGradient
      colors={["#e5ecf9", "#f6f7f9"]}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View style={onboardingStyles.firstContainer}>
        <View>
          <Image
            source={require("@/assets/logo.png")}
            // style={onboardingStyles.logo}
            resizeMode="cover"
          />
          <Image source={require("@/assets/onboarding/shape_9.png")} />
        </View>
        <View style={onboardingStyles.titleWrapper}>
          <Image
            source={require("@/assets/onboarding/shape_3.png")}
            style={onboardingStyles.titleTextShape1}
          />
          <Text
            style={[
              onboardingStyles.titleText,
              { fontFamily: "Raleway_700Bold", color: "#525252" },
            ]}
          >
            Start Learning With
          </Text>
          <Image
            source={require("@/assets/onboarding/shape_2.png")}
            style={onboardingStyles.titleTextShape2}
          />
        </View>
        <View>
          <Image
            source={require("@/assets/onboarding/shape_6.png")}
            style={onboardingStyles.titleShape3}
          />
          <Text
            style={[
              onboardingStyles.titleText,
              { fontFamily: "Raleway_700Bold", color: "#525252" },
            ]}
          >
            Youdemy
          </Text>
        </View>
        <View style={onboardingStyles.dscpWrapper}>
            <Text style={[onboardingStyles.dscpText, {fontFamily: "Nunito_400Regular"}]}>
               Explore a varity of interactive lessons!
            </Text>
            <Text style={[onboardingStyles.dscpText, {fontFamily: "Nunito_400Regular"}]}>
               Video, quizzes & assignments.
            </Text>
        </View>
        <TouchableOpacity onPress={()=> router.push("/(routes)/welcome-intro")} style={onboardingStyles.buttonWrapper}>
          <Text style={[onboardingStyles.buttonText, {fontFamily: "Nunito_400Regular"}]}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="dark" />
    </LinearGradient>
  );
}
