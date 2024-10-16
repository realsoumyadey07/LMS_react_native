import { Image, Text, View } from "react-native";
import {
     Nunito_400Regular,
     Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
import { Raleway_700Bold, useFonts } from "@expo-google-fonts/raleway";
import { LinearGradient } from "expo-linear-gradient";
import AppIntroSlider from "react-native-app-intro-slider";
import { onboardingSwiperData } from "@/constants/constants";
import { router } from "expo-router";
import { commonStyles } from "@/styles/common/common.styles";
import { onboardingStyles } from "@/styles/onboarding/onboarding";

export default function WelcomeIntroScreen() {
     let [fontsLoaded, fontError] = useFonts({
          Raleway_700Bold,
          Nunito_400Regular,
          Nunito_600SemiBold,
     });
     if (!fontsLoaded && !fontError) {
          return null;
     }
     const renderItem = ({ item }: { item: onboardingSwiperDataType }) => (
          <LinearGradient
               colors={["#e5ecf9", "#f6f7f9", "#e8eef9"]}
               style={{ flex: 1, paddingHorizontal: 16 }}
          >
               <View style={{ marginTop: 80 }}>
                    <Image
                         source={item.image}
                         style={{ alignSelf: "center", marginBottom: 20 }}
                    />
                    <Text style={[commonStyles.title, { fontFamily: "Raleway_700Bold" }]}>
                         {item.title}
                    </Text>
                    <View style={{ marginTop: 15 }}>
                         <Text style={[commonStyles.description, { fontFamily: "Nunito_400Regular" }]}>
                              {item.description}
                         </Text>
                         <Text style={[commonStyles.description, { fontFamily: "Nunito_400Regular" }]}>
                              {item.sortDescrition}
                         </Text>
                         <Text style={[commonStyles.description, { fontFamily: "Nunito_400Regular" }]}>
                              {item.sortDescrition2}
                         </Text>
                    </View>
               </View>
          </LinearGradient>
     );
     return (
          <AppIntroSlider
               renderItem={renderItem as any}
               data={onboardingSwiperData}
               onDone={() => router.push("/login")}
               onSkip={() => router.push("/login")}
               renderNextButton={() => (
                    <View style={[onboardingStyles.welcomebuttonStyle]}>
                         <Text style={[onboardingStyles.buttonText, { fontFamily: "Nunito_400Regular" }]}>
                              Next
                         </Text>
                    </View>
               )}
               renderDoneButton={() => (
                    <View style={onboardingStyles.welcomebuttonStyle}>
                         <Text style={[onboardingStyles.buttonText, { fontFamily: "Nunito_400Regular" }]}>
                              Start
                         </Text>
                    </View>
               )}
               showSkipButton={false}
               dotStyle={commonStyles.dotStyle}
               bottomButton={true}
               activeDotStyle={commonStyles.activeDot}
          />
     );
}

