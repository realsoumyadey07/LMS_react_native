import { Text, View } from "react-native";
import {
     Nunito_400Regular,
     Nunito_600SemiBold
} from "@expo-google-fonts/nunito";
import { Raleway_700Bold, useFonts } from "@expo-google-fonts/raleway";
import { LinearGradient } from "expo-linear-gradient";
import AppIntroSlider from "react-native-app-intro-slider";
import { onboardingSwiperData } from "@/constants/constants";
import { router } from "expo-router";

export default function WelcomeIntroScreen() {
     let [fontsLoaded, fontError] = useFonts({
          Raleway_700Bold,
          Nunito_400Regular,
          Nunito_600SemiBold,
     });
     if (!fontsLoaded && !fontError) {
          return null;
     }
     const renderItem = ({ item }: { item: onboardingSwiperDataType }) => {
          <LinearGradient colors={["#e5ecf9", "#f6f7f9", "#e8eef9"]}
               style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
               <View>

               </View>
          </LinearGradient>
     }
     return (
          <AppIntroSlider
               renderItem={renderItem}
               data={onboardingSwiperData}
               onDone={()=> router.push("/login")}
               onSkip={()=> router.push("/login")}
          />
     )
}