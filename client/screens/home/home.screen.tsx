import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { commonStyles } from '@/styles/common/common.styles'
import Header from '@/components/Header'
import SearchInput from '@/components/SearchInput'

const HomeScreen = () => {
  return (
    <LinearGradient
      colors={["#e5ecf9", "#f6f7f9"]}
      style={{ flex: 1, paddingTop: 30 }}
    >
      <Header />
      <ScrollView>
        <SearchInput />
      </ScrollView>
    </LinearGradient>
  )
}

export default HomeScreen

