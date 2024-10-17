import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  Entypo,
  Fontisto,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Raleway_700Bold,
  Raleway_600SemiBold,
} from "@expo-google-fonts/raleway";
import {
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_700Bold,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { commonStyles } from "@/styles/common/common.styles";

export default function LoginScreen() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [required, setRequired] = useState();
  const [error, setError] = useState({
     password: ""
  });
  const handlePasswordValidation = (value: string)=> {
     const password = value;
     const passwordSpecialCharecter = /(?=.*[!@#$&*])/;
     const passwordOneNumber = /(?=.*[0-9])/;
     const passwordSixValue = /(?=.{6,})/;
     if (!passwordSpecialCharecter.test(password)){
          setError({
               ...error,
               password: "Write atleast one special charecter"
          });
          setUserInfo({
               ...userInfo,
               password: ""
          });
     }
  }
  return (
    <LinearGradient
      colors={["#e5ecf9", "#f6f7f9"]}
      style={{ flex: 1, paddingTop: 40 }}
    >
      <ScrollView>
        <Image
          source={require("@/assets/sign-in/sign_in.png")}
          style={styles.signInImage}
          resizeMode="cover"
        />
        <Text style={[styles.welcomeText, { fontFamily: "Raleway_700Bold" }]}>
          Welcome Back!
        </Text>
        <Text style={styles.learningText}>
          Login to your account of Youdemy
        </Text>
        <View style={styles.inputContainer}>
          <View>
            <TextInput
              placeholder="Enter your email here"
              keyboardType="email-address"
              style={[styles.input, { paddingLeft: 45 }]}
              value={userInfo.email}
              onChange={(e) => setUserInfo({ ...userInfo, email: e as any })}
              placeholderTextColor="#a1a1a1"
            />
            <Fontisto
              style={{ position: "absolute", left: 30, top: 17.8 }}
              name="email"
              size={20}
              color="#a1a1a1"
            />
            {required && (
              <View style={commonStyles.errorContainer}>
                <Entypo name="cross" size={18} color="red" />
                <Text></Text>
              </View>
            )}
          </View>
          <View>
            <TextInput
              placeholder="******************"
              keyboardType="default"
              secureTextEntry={!isPasswordVisible}
              defaultValue=""
              style={[styles.input, { paddingLeft: 45 }]}
              value={userInfo.password}
              onChange={(e) => setUserInfo({ ...userInfo, password: e as any })}
              placeholderTextColor="#a1a1a1"
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  signInImage: {
    width: wp("60%"),
    height: 250,
    alignSelf: "center",
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 15,
    color: "#5e5e5e",
    marginTop: 5,
  },
  learningText: {
    textAlign: "center",
    color: "#575757",
    fontSize: 15,
    marginTop: 5,
  },
  inputContainer: {
    marginHorizontal: 16,
    marginTop: 30,
    rowGap: 30,
  },
  input: {
    height: 55,
    marginHorizontal: 16,
    borderRadius: 8,
    paddingLeft: 35,
    fontSize: 16,
    backgroundColor: "white",
    color: "#a1a1a1",
  },
});
