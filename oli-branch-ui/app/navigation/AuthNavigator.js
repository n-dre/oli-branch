// navigation/AuthNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/Onboarding/SplashScreen';
import WelcomeScreen from '../screens/Onboarding/WelcomeScreen';
import GetStartedScreen from '../screens/Onboarding/GetStartedScreen';
import PersonalInfoScreen from '../screens/Onboarding/PersonalInfoScreen';
import BusinessInfoScreen from '../screens/Onboarding/BusinessInfoScreen';
import IndustryInfoScreen from '../screens/Onboarding/IndustryInfoScreen';
import BusinessGoalsScreen from '../screens/Onboarding/BusinessGoalsScreen';
import FinancialStatusScreen from '../screens/Onboarding/FinancialStatusScreen';
import BusinessPreferencesScreen from '../screens/Onboarding/BusinessPreferencesScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator initialRouteName="SplashScreen">
    <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} options={{ headerShown: false }} />
    <Stack.Screen name="PersonalInfoScreen" component={PersonalInfoScreen} options={{ headerShown: false }} />
    <Stack.Screen name="BusinessInfoScreen" component={BusinessInfoScreen} options={{ headerShown: false }} />
    <Stack.Screen name="IndustryInfoScreen" component={IndustryInfoScreen} options={{ headerShown: false }} />
    <Stack.Screen name="BusinessGoalsScreen" component={BusinessGoalsScreen} options={{ headerShown: false }} />
    <Stack.Screen name="FinancialStatusScreen" component={FinancialStatusScreen} options={{ headerShown: false }} />
    <Stack.Screen name="BusinessPreferencesScreen" component={BusinessPreferencesScreen} options={{ headerShown: false }} />
    <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ headerShown: false }} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default AuthNavigator;

