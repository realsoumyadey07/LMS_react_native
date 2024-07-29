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
import React, { useState } from "react";
import {
  Raleway_700Bold,
  useFonts,
  Raleway_600SemiBold,
} from "@expo-google-fonts/raleway";
import {
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_700Bold,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";
import { commonStyles } from "@/styles/common/common.styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { router } from "expo-router";
import { Toast } from "react-native-toast-notifications";
import axios from "axios";
import { SERVER_URI } from "@/utils/uri";


interface IFormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Please enter a valid email address").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters long").required("Password is required"),
});

const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [required, setRequired] = useState("");
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });
  const onSubmit = async (data: IFormInputs) => {
    setButtonSpinner(true);
    try {
      await axios.post(`${SERVER_URI}/login-user`, data);
      setButtonSpinner(false);
      reset();
      Toast.show("Loggin successfully!", {
        type: "success"
      });
      router.push("/");
    } catch (error: any) {
      setButtonSpinner(false);
      Toast.show("Invalid credentials!", {
        type: "danger"
      });
    }
  }
  let [fontsLoaded, fontError] = useFonts({
    Raleway_600SemiBold,
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
    Nunito_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <LinearGradient colors={["#e5ecf9", "#f6f7f9"]} style={{ flex: 1 }}>
      <ScrollView>
        <Image
          source={require("@/assets/sign-in/sign_in.png")}
          style={styles.signInImage}
        />
        <Text style={[styles.welcomeText, { fontFamily: "Raleway_700Bold" }]}>
          Welcome Back!
        </Text>
        <Text style={styles.learningText}>
          Login to your existing account of Becodemy
        </Text>
        <View style={styles.inputContainer}>
          <View>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <TextInput
                    style={commonStyles.input}
                    keyboardType="email-address"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="Enter your email here"
                  />
                  {errors.email && <Text style={{ color: "red", marginLeft: 25 }}>{errors.email.message}</Text>}
                </>
              )}
            />


          </View>
          <View>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <TextInput
                    style={commonStyles.input}
                    secureTextEntry={!passwordVisible}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="Enter your password here"
                  />
                  {errors.password && <Text style={{ color: "red", marginLeft: 25 }}>{errors.password.message}</Text>}
                </>
              )}
            />

            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
              style={styles.visibleIcon}
            >
              {passwordVisible ? (
                <MaterialCommunityIcons name="eye" size={24} color="gray" />
              ) : (
                <MaterialCommunityIcons
                  name="eye-off"
                  size={24}
                  color="gray"
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/(routes)/forgot-password")}>
              <Text style={[styles.forgotSection, { fontFamily: "Nunito_600SemiBold" }]}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
            {buttonSpinner ?
              (<ActivityIndicator size="small" color={"white"} />) :
              (<Text style={{ color: "white", fontWeight: 600 }}>Sign In</Text>)}
          </TouchableOpacity>
          <View style={{ marginTop: -10, flexDirection: "row", alignSelf: "center", gap: 5 }}>
            <Text style={{ textAlign: "center", fontWeight: 600 }}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => router.push("/(routes)/sign-up")}>
              <Text style={{ color: "#2467ec", fontWeight: 600 }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  signInImage: {
    width: "60%",
    height: 250,
    marginTop: 50,
    alignSelf: "center",
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 24,
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
    rowGap: 20,
  },
  visibleIcon: {
    position: "absolute",
    right: 30,
    top: 15,
  },
  button: {
    backgroundColor: "#2467ec",
    width: responsiveWidth(82),
    height: responsiveHeight(6.3),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  forgotSection: {
    marginHorizontal: 20,
    textAlign: "right",
    fontSize: 14,
    fontWeight: 700,
    marginTop: 10
  }
});
