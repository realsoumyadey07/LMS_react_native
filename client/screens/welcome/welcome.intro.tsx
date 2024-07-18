import { Image, Text, View } from "react-native";
import React from "react";
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
import { Raleway_700Bold, useFonts } from "@expo-google-fonts/raleway";
import { LinearGradient } from "expo-linear-gradient";
import AppIntroSlider from "react-native-app-intro-slider";
import { onboardingSwiperData } from "@/constants/constants";
import { router } from "expo-router";
import { styles } from "@/styles/onboarding/onboarding";
import { commonStyles } from "@/styles/common/common.styles";

const WelcomeIntroScreen = () => {
  let [fontLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_600SemiBold,
  });
  if(!fontLoaded && !fontError){
    return null;
  }
  const renderItem = ({ item }: { item: onboardingSwiperDataType }) => {
    return (
      <LinearGradient
        style={{ flex: 1, paddingHorizontal: 16 }}
        colors={["#e5ecf9", "#f6f7f9", "#e8eef9"]}
      >
        <View style={{ marginTop: 80 }}>
          <Image source={item.image} style={styles.slideImage} />
          <Text style={[commonStyles.title, { fontFamily: "Raleway_700Bold" }]}>
            {item.title}
          </Text>
          <View style={{ marginTop: 15 }}>
            <Text style={[commonStyles.description, { fontFamily: "Nunito_400Regular"}]}>{item.description}
            </Text>
            <Text style={[commonStyles.description, { fontFamily: "Nunito_400Regular"}]}>
              {item.sortDescrition}
            </Text>
            <Text style={[commonStyles.description, { fontFamily: "Nunito_400Regular"}]}>
              {item.sortDescrition2}
            </Text>
          </View>
        </View>
      </LinearGradient>
    );
  };
  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={onboardingSwiperData}
      onDone={() => {
        router.push("/login");
      }}
      onSkip={() => {
        router.push("/login");
      }}
      renderNextButton={() => (
        <View style={styles.welcomeButtonStyle}>
          <Text
            style={[styles.buttonText, { fontFamily: "Nunito_600SemiBold" }]}
          >
            Next
          </Text>
        </View>
      )}
      renderDoneButton={() => (
        <View style={styles.welcomeButtonStyle}>
          <Text
            style={[styles.buttonText, { fontFamily: "Nunito_600SemiBold" }]}
          >
            Done
          </Text>
        </View>
      )}
      showSkipButton={false}
      dotStyle={commonStyles.dotStyle}
      bottomButton={true}
      activeDotStyle={commonStyles.activeDotStyle}
    />
  );
};

export default WelcomeIntroScreen;
