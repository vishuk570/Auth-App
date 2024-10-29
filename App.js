import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';;
import Navigation from './src/navigation/Navigation';


const App = () => {
  return (
    <NavigationContainer>
      <StatusBar 
         barStyle="dark-content"
         backgroundColor="white"
         translucent={true}
      />
      <Navigation/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})