import { StyleSheet } from 'react-native'
import React from 'react'
import {
    LoginScreen,
    SignupScreen,
    ForgetPassScreen
  } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen  options={{headerShown:false}} name="Login" component={LoginScreen} />
        <Stack.Screen  options={{headerShown:false}} name="Signup" component={SignupScreen} />
        <Stack.Screen  options={{headerShown:false}} name="ForgetPass" component={ForgetPassScreen} />
    </Stack.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})