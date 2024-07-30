import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import AnimatedLoader from "react-native-animated-loader";

const Loader = () => {
  return (
    <LinearGradient 
    colors={["#e5ecf9", "#f6f7f9"]}
    style={{flex: 1, justifyContent: "center", alignItems: "center"}}
    >
     <AnimatedLoader
      visible={true}
      overlayColor="rgba(255, 255, 255,0.75"
      source={require("@/assets/animations/online-data-manager.json")}
      animationStyle={{width: 250, height: 200}}
      speed={1.5}
     />
    </LinearGradient>
  )
}

export default Loader

