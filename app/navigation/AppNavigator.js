import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';  // Import from screens folder
import WelcomeScreen from '../screens/WelcomeScreen';  // Import from screens folder
import GetStartedScreen from '../screens/GetStartedScreen';  // Import from screens folder
import PersonalInfoScreen from '../screens/PersonalInfoScreen';  // Import from screens folder
import BusinessInfoScreen from '../screens/BusinessInfoScreen';  // Import from screens folder
import IndustryInfoScreen from '../screens/IndustryInfoScreen';  // Import from screens folder

import BusinessGoalsScreen from '../screens/BusinessGoalsScreen';  // Import from screens folder
import FinancialStatusScreen from '../screens/FinancialStatusScreen';  // Import from screens folder
import BusinessPreferencesScreen from '../screens/BusinessPreferencesScreen';  // Import from screens folder
import RegistrationScreen from '../screens/RegistrationScreen';  // Import from screens folder


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">

        {/* SplashScreen */}
        <Stack.Screen 
          name="SplashScreen" 
          component={SplashScreen} 
          options={{ headerShown: false }}  // Hides the header
        />

        {/* WelcomeScreen */}
        <Stack.Screen 
          name="WelcomeScreen" 
          component={WelcomeScreen} 
          options={{ headerShown: false }}  // Hides the header
        />

        {/* GetStartedScreen */}
        <Stack.Screen 
          name="GetStartedScreen" 
          component={GetStartedScreen} 
          options={{ headerShown: false }}  // Hides the header
        />

        {/* PersonalInfoScreen */}
        <Stack.Screen 
          name="PersonalInfoScreen" 
          component={PersonalInfoScreen} 
          options={{ headerShown: false }}  // Hides the header
        />

        {/* BusinessInfoScreen */}
        <Stack.Screen 
          name="BusinessInfoScreen" 
          component={BusinessInfoScreen} 
          options={{ headerShown: false }}  // Hides the header
        />

        {/* IndustryInfoScreen */}
        <Stack.Screen 
          name="IndustryInfoScreen" 
          component={IndustryInfoScreen} 
          options={{ headerShown: false }}  // Hides the header
        />

        {/* BusinessGoalsScreen */}
        <Stack.Screen 
          name="BusinessGoalsScreen" 
          component={BusinessGoalsScreen} 
          options={{ headerShown: false }}  // Hides the header
        />

        {/* FinancialStatusScreen */}
        <Stack.Screen 
          name="FinancialStatusScreen" 
          component={FinancialStatusScreen} 
          options={{ headerShown: false }}  // Hides the header
        />

        {/* BusinessPreferencesScreen */}
        <Stack.Screen 
          name="BusinessPreferencesScreen" 
          component={BusinessPreferencesScreen} 
          options={{ headerShown: false }}  // Hides the header
        />

        {/* RegistrationScreen */}
        <Stack.Screen 
          name="RegistrationScreen" 
          component={RegistrationScreen} 
          options={{ headerShown: false }} 
        />

    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;