import React from 'react'
import { Tabs } from 'expo-router'
import { Image } from 'react-native';
import useUser from '@/hooks/auth/useUser';

const TabsLayout = () => {
  const {user} = useUser();
  return (
    <Tabs screenOptions={({route})=> ({
      tabBarIcon: ({color})=> {
        let iconName;
        if(route.name === "index"){
          iconName = require("@/assets/icons/HouseSimple.png");
        } else if(route.name === "search/index"){
          iconName = require("@/assets/icons/search.png");
        }else if(route.name === "courses/index"){
          iconName = require("@/assets/icons/Bookmark.png");
        }else if(route.name === "profile/index"){
          iconName = user?.avatar || require("@/assets/icons/User.png");
        }
        return (
          <Image
            style={{width: 25, height: 25, tintColor: color}}
            source={iconName}
          />
        )
      },
      headerShown: false,
      tabBarShowLabel: false
    })}>
      <Tabs.Screen name='index' />
      <Tabs.Screen name='search/index' />
      <Tabs.Screen name='courses/index' />
      <Tabs.Screen name='profile/index' />
    </Tabs>
  )
}

export default TabsLayout

