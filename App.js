import { StatusBar, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';;
import Navigation from './src/navigation/Navigation';
import color from './src/constants/theme'


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <StatusBar 
         barStyle="dark-content"
         backgroundColor={isDarkMode ? color.PrimaryBlue : "#fff"}
         translucent={true}
      />
      <Navigation/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})