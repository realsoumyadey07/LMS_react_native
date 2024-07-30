import React from 'react'
import { Tabs } from 'expo-router'
import useUser from '@/hooks/auth/useUser'

const TabsLayout = () => {
  const { loading, user } = useUser();
  return (
    <Tabs screenOptions={{}}>
      <Tabs.Screen name='home/index' />
      <Tabs.Screen name='courses/index' />
      <Tabs.Screen name='profile/index' />
      <Tabs.Screen name='search/index' />
    </Tabs>
  )
}

export default TabsLayout

