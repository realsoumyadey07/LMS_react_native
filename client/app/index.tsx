import React from 'react'
import { Redirect } from 'expo-router'
import useUser from '@/hooks/auth/useUser';
import Loader from '@/components/Loader';

export default function TabsIndex() {
  const { loading, user } = useUser();
  return (
    <>
      {
        loading ? (
          <Loader/>
        ) : (
          <Redirect
            href={!user ? "/(routes)/onboarding" : "/(tabs)/home"}
          />)
      }
    </>

  )
}

