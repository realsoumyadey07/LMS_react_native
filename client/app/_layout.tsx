import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { Text, View } from 'react-native';
import OnBoarding from './(routes)/onboarding';
import { Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      {
        isLoggedIn ? (
          <View></View>
        ) : (
          <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name='index'/>
            <Stack.Screen name='(routes)/onboarding/index'/>
            <Stack.Screen name='(routes)/welcome-intro/index'/>
            <Stack.Screen name='(routes)/login/index'/>
          </Stack>
        )
      }
    </>
  );
}
