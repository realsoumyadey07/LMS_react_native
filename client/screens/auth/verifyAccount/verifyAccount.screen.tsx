import {
     ActivityIndicator,
     StyleSheet,
     Text,
     TextInput,
     TouchableOpacity,
     View
} from 'react-native'
import React, { useRef, useState } from 'react'
import CommonButton from '@/components/CommonButton';
import {
     responsiveHeight,
     responsiveWidth
} from 'react-native-responsive-dimensions';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { SERVER_URI } from '@/utils/uri';
import { Toast } from 'react-native-toast-notifications';

const VerifyAccountScreen = () => {
     const [code, setCode] = useState(new Array(4).fill(""));
     const [buttonSpinner, setButtonSpinner] = useState<Boolean>(false);
     const inputs = useRef<any>([...Array(4)].map(() => React.createRef()));
     const handleInput = (text: string, index: number) => {
          const newCode = [...code];
          newCode[index] = text;
          setCode(newCode);
          if (text && index < 3) {
               inputs.current[index + 1].current.focus();
          }
          if (text === "" && index > 0) {
               inputs.current[index - 1].current.focus();
          }
     }
     const submitVerify = async () => {
          setButtonSpinner(true);
          const otp = code.join("");
          const activationToken = await AsyncStorage.getItem("activation_token");
          try {
               const response = await axios.post(`${SERVER_URI}/activate-user`, {
                    activation_token: activationToken,
                    activation_code: otp
               });
               Toast.show("User successfully registered", {
                    type: "success"
               });
               setCode(new Array(4).fill(""));
               setButtonSpinner(false);
               router.push("/(routes)/login");
          } catch (error: any) {
               Toast.show(error.message,{
                    type: "danger"
               })
               setButtonSpinner(false);
          }
     }
     return (
          <View style={styles.container}>
               <Text style={styles.headerText}>
                    Verification Code
               </Text>
               <Text style={styles.subText}>
                    We have sent the verification code to your email.
               </Text>
               <View style={styles.inputContainer}>
                    {code.map((_, index) => (
                         <TextInput
                              key={index}
                              style={styles.inputBox}
                              keyboardType='number-pad'
                              maxLength={1}
                              onChangeText={(text) => handleInput(text, index)}
                              value={code[index]}
                              ref={inputs.current[index]}
                              returnKeyType='done'
                              autoFocus={index === 0}
                         />
                    ))}

               </View>
               <CommonButton
                    title={buttonSpinner?<ActivityIndicator size="small" color={"white"} />:'Verify'}
                    customButtonStyles={{
                         backgroundColor: "#2467ec",
                         width: responsiveWidth(82),
                         height: responsiveHeight(6.3),
                         alignSelf: "center",
                         justifyContent: "center",
                         alignItems: "center",
                         borderRadius: 5
                    }}
                    customTextStyles={{
                         color: "white",
                         fontWeight: 600
                    }}
                    handleSubmit={submitVerify}
               />
               <TouchableOpacity onPress={() => router.back()}>
                    <Text style={{ fontWeight: 600, marginTop: 7 }}>
                         Go back to? <Text style={{ color: "#2467ec" }}>sign in</Text>
                    </Text>
               </TouchableOpacity>
          </View>
     )
}

export default VerifyAccountScreen

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          backgroundColor: "#fff"
     },
     headerText: {
          fontSize: 22,
          fontWeight: "bold",
          marginBottom: 10
     },
     subText: {
          fontSize: 16,
          color: "#666",
          marginBottom: 20,
          textAlign: "center"
     },
     inputContainer: {
          flexDirection: "row",
          marginBottom: 20
     },
     inputBox: {
          width: 50,
          height: 50,
          borderWidth: 1,
          borderColor: "#ddd",
          borderRadius: 10,
          textAlign: "center",
          marginRight: 10,
          fontSize: 20
     }
})