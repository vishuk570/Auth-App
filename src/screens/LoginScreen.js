import { StyleSheet, TouchableOpacity, View, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import color from '../constants/theme'
import CustomText from '../components/CustomText';
import AuthHeader from '../components/AuthHeader';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import CustomTextInput from '../components/CustomTextInput';
import CustomBtn from '../components/CustomBtn';
import AuthBottom from '../components/AuthBottom';
import ProviderBottom from '../components/ProviderBottom';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : '#fff',
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={backgroundStyle}>
        <View style={styles.mainContainer}>
          <View style={styles.mainStyle}>
            <AuthHeader />
            <View >
              <CustomTextInput
                labelName='Username'
                value={email}
                onChangeText={(actualData) => setEmail(actualData)}
                autoCapitalize='none'
              />
              <CustomTextInput
                labelName='Password'
                secureTextEntry={true}
                value={password}
                onChangeText={(actualData) => setPassword(actualData)}
              />
              <TouchableOpacity
                style={styles.forgetView}
                onPress={() => navigation.navigate('ForgetPass')}
              >
                <CustomText
                  text={'Forgot password?'}
                  textStyle={styles.forgetText}
                />
              </TouchableOpacity>
              <CustomBtn
                btnText="Sign in"
              // onPress={() => submit()}
              />
            </View>
          </View>
          <View style={styles.mainStyle2}>
            <AuthBottom
              navigation={navigation}
              msgText={'New to Residual Reports? '}
              navigateName={'Signup'}
              navigatePageName={'Sign up'}
            />
          </View>
        </View>
        <ProviderBottom />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: moderateScale(20),
    paddingTop: moderateScale(20),
  },
  mainStyle: {
    paddingHorizontal: moderateScale(2),
    paddingTop: moderateVerticalScale(2),
  },
  mainStyle2: {
    paddingHorizontal: moderateScale(2),
    paddingTop: moderateVerticalScale(2),
    marginTop: moderateVerticalScale(24),
  },
  forgetView: {
    alignSelf: 'flex-end',
  },
  forgetText: {
    color: color.PrimaryBlue,
    fontSize: 12,
    fontWeight: '700',
  },
})