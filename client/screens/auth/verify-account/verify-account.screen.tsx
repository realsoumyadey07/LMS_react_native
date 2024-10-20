import Button from "@/components/button/button";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function VerifyAccountScreen() {
     const [code, setCode] = useState(new Array(4).fill(""));
     const inputs = useRef<any>([...Array(4)].map(() => React.createRef()));
     const handleInput = (text: any, index: any) => {
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
     const handleVerify = ()=> {

     }
     return (
          <View style={styles.container}>
               <Text style={styles.headerText}>Verification Code</Text>
               <Text style={styles.subText}>We have sent a verification code to your email address.</Text>
               <View style={styles.inputContainer}>
                    {code.map((_, index) => (
                         <TextInput
                              style={styles.inputBox}
                              key={index}
                              keyboardType="number-pad"
                              maxLength={1}
                              onChangeText={(text) => handleInput(text, index)}
                              value={code[index]}
                              ref={inputs.current[index] as any}
                              returnKeyType="done"
                              autoFocus={index === 0}
                         />
                    ))}
               </View>
               <Button title="Verify" onPress={handleVerify}/>
               <StatusBar style="dark" />
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          backgroundColor: "#fff"
     },
     headerText: {
          fontSize: 22,
          fontWeight: "bold",
          marginBottom: 10
     },
     subText: {
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
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#ddd",
          textAlign: "center",
          marginRight: 10
     },
     
})