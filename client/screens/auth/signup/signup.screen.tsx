import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  Entypo,
  Fontisto,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
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
import Feather from "@expo/vector-icons/Feather";
import { commonStyles } from "@/styles/common/common.styles";
import { router } from "expo-router";

export default function SignupScreen() {
  
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [required, setRequired] = useState();
  const [error, setError] = useState({
    password: "",
  });
  const [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Raleway_600SemiBold,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
    Nunito_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  const handlePasswordValidation = (value: string) => {
    const password = value;
    const passwordSpecialCharecter = /(?=.*[!@#$&*])/;
    const passwordOneNumber = /(?=.*[0-9])/;
    const passwordSixValue = /(?=.{6,})/;
    if (!passwordSpecialCharecter.test(password)) {
      setError({
        ...error,
        password: "Write atleast one special charecter",
      });
      setUserInfo({
        ...userInfo,
        password: "",
      });
    } else if (!passwordOneNumber.test(password)) {
      setError({
        ...error,
        password: "Write at least one number",
      });
    } else if (!passwordSixValue.test(password)) {
      setError({
        ...error,
        password: "Write at least 6 characters",
      });
      setUserInfo({
        ...userInfo,
        password: "",
      });
    } else {
      setError({
        ...error,
        password: "",
      });
      setUserInfo({
        ...userInfo,
        password: value,
      });
    }
  };
  const handleLogin = () => { 
    router.push("/(routes)/verify-account")
  };
  return (
    <LinearGradient
      colors={["#e5ecf9", "#f6f7f9"]}
      style={{ flex: 1, paddingTop: 40 }}
    >
      <ScrollView>
        <Image
          source={require("@/assets/sign-in/signup.png")}
          style={styles.signInImage}
          resizeMode="cover"
        />
        <Text style={[styles.welcomeText, { fontFamily: "Raleway_700Bold" }]}>
          Welcome!
        </Text>
        <Text style={styles.learningText}>
          Signup to your account of Youdemy
        </Text>
        <View style={styles.inputContainer}>
          <View>
            <TextInput
              placeholder="Enter your name here"
              keyboardType="default"
              style={[styles.input, { paddingLeft: 45 }]}
              value={userInfo.name}
              onChangeText={(e) => setUserInfo({ ...userInfo, name: e as any })}
              placeholderTextColor="#a1a1a1"
            />
            <Feather
              style={{ position: "absolute", left: 30, top: 17.8 }}
              name="user"
              size={20}
              color="#a1a1a1"
            />
            {required && (
              <View style={commonStyles.errorContainer}>
                <Entypo name="cross" size={18} color="red" />
                <Text style={styles.errorText}></Text>
              </View>
            )}
          </View>
          <View>
            <TextInput
              placeholder="Enter your email here"
              keyboardType="email-address"
              style={[styles.input, { paddingLeft: 45 }]}
              value={userInfo.email}
              onChangeText={(e) => setUserInfo({ ...userInfo, email: e as any })}
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
                <Text style={styles.errorText}></Text>
              </View>
            )}
          </View>
          <View>
            <TextInput
              placeholder="Enter your password here"
              keyboardType="default"
              secureTextEntry={!isPasswordVisible}
              defaultValue=""
              style={[styles.input, { paddingLeft: 45 }]}
              value={userInfo.password}
              onChangeText={(e) => setUserInfo({ ...userInfo, password: e as any })}
              placeholderTextColor="#a1a1a1"
            />
            <Feather
              name="lock"
              size={20}
              color="#a1a1a1"
              style={{ position: "absolute", left: 30, top: 15 }}
            />
            <TouchableOpacity
              style={styles.visibleIcon}
              onPress={() => setPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? (
                <Ionicons name="eye-outline" size={23} color={"#747474"} />
              ) : (
                <Ionicons name="eye-off-outline" size={23} color={"#747474"} />
              )}
            </TouchableOpacity>
            {error.password && (
              <View style={[commonStyles.errorContainer, { top: 145 }]}>
                <Entypo name="cross" size={18} color={"red"} />
                <Text style={styles.errorText}>{error.password}</Text>
              </View>
            )}
          </View>
          <TouchableOpacity
            onPress={() => router.push("/login" as any)}
          >
            <Text
              style={[
                styles.forgotSection,
                { fontFamily: "Nunito_600SemiBold" },
              ]}
            >
              Already have an account??
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonWrapper} onPress={handleLogin}>
            {buttonSpinner ? (
              <ActivityIndicator size={"small"} color={"white"} />
            ) : (
              <Text style={styles.buttonText}>Signup</Text>
            )}
          </TouchableOpacity>
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
  visibleIcon: {
    position: "absolute",
    top: 15,
    right: 30,
  },
  errorText: {
    color: "red",
    fontSize: 11,
    marginTop: -1,
  },
  forgotSection: {
    marginHorizontal: 16,
    // textAlign: "center",
    fontSize: 15,
    marginTop: -20,
    color: "#5e5e5e",
  },
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
});
