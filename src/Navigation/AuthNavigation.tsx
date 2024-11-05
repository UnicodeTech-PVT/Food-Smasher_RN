import {createStackNavigator} from '@react-navigation/stack';
import {AppRoutes} from '../Utils/Routes';
import HomeScreen from '../Ui/Section/Auth/Screens/homeScreen';
import CatagoriesScreen from '../Ui/Section/Auth/Screens/CatagoriesScreen';
import LoginScreen from '../Ui/Section/Auth/Screens/LoginScreen';
import MapScreen from '../Ui/Section/Auth/Screens/MapScreen';
import OtpScreen from '../Ui/Section/Auth/Screens/OtpScreen';
import ResetPswrdScreen from '../Ui/Section/Auth/Screens/ResetPswrdScreen';
import {useEffect} from 'react';
import Geocoder from 'react-native-geocoding';
import SignUpScreen from '../Ui/Section/Auth/Screens/SignUpScreen';

const Stack = createStackNavigator();

export const AuthNavigation = () => {
  useEffect(() => {
    Geocoder.init('AIzaSyDcUbAMWfOS0WzCT-iuNOQftri6QIjv7zU');
  }, []);
  return (
    <Stack.Navigator
      initialRouteName={AppRoutes.Auth.Home}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={AppRoutes.Auth.Home} component={HomeScreen} />
      <Stack.Screen name={AppRoutes.Auth.Login} component={LoginScreen} />
      <Stack.Screen name={AppRoutes.Auth.OTP} component={OtpScreen} />
      <Stack.Screen name={AppRoutes.Auth.Reset} component={ResetPswrdScreen} />
      <Stack.Screen name={AppRoutes.Auth.map} component={MapScreen} />
      <Stack.Screen
        name={AppRoutes.Auth.catagory}
        component={CatagoriesScreen}
      />
      <Stack.Screen name={AppRoutes.Auth.SignUp} component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
