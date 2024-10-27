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
import DashboardScreen from '../screens/DashboardScreen';  // Import from screens folder
import LoginScreen from '../screens/LoginScreen';  // Import from screens folder

import AboutScreen from '../screens/AboutScreen';  // Import from screens folder
import AccountSettingsScreen from '../screens/AccountSettingsScreen';  // Import from screens folder
import BankingProductsScreen from '../screens/BankingProductsScreen';  // Import from screens folder
import ChatCommunityScreen from '../screens/ChatCommunityScreen';  // Import from screens folder
import EducationalResourcesScreen from '../screens/EducationalResourcesScreen';  // Import from screens folder
import GovernmentResourcesScreen from '../screens/GovernmentResourcesScreen';  // Import from screens folder
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';  // Import from screens folder
import SecuritySettingsScreen from '../screens/SecuritySettingsScreen';  // Import from screens folder
import SettingsScreen from '../screens/SettingsScreen';  // Import from screens folder

import ResetPasswordScreen from '../screens/ResetPasswordScreen';  // Import from screens folder
import ChangeUserScreen from '../screens/ChangeUserScreen';  // Import from screens folder
import NearbyProductsScreen from '../screens/NearbyProductsScreen';

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
          options={{ headerShown: false }} /* Add this line */
        />

        {/* DashboardScreen */}
        <Stack.Screen 
          name="DashboardScreen" 
          component={DashboardScreen}
          options={{ headerShown: false }} /* Add this line */
        />

        {/* LoginScreen */}
        <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen}
          options={{ headerShown: false }} /* Add this line */
        />
        
        {/* AboutScreen */}
        <Stack.Screen 
          name="AboutScreen" 
          component={AboutScreen}
          options={{ headerShown: false }} /* Add this line */
        />

        {/* AccountSettingsScreen */}
        <Stack.Screen 
          name="AccountSettingsScreen" 
          component={AccountSettingsScreen}
          options={{ headerShown: false }} /* Add this line */
        />

        {/* BankingProductsScreen */}
        <Stack.Screen 
          name="BankingProductsScreen" 
          component={BankingProductsScreen}
          options={{ headerShown: false }} /* Add this line */
        />

        {/* ChatCommunityScreen */}
        <Stack.Screen 
          name="ChatCommunityScreen" 
          component={ChatCommunityScreen}
          options={{ headerShown: false }} /* Add this line */
        />

        {/* EducationalResourcesScreen */}
        <Stack.Screen 
          name="EducationalResourcesScreen " 
          component={EducationalResourcesScreen}
          options={{ headerShown: false }} /* Add this line */
        />

        {/* GovernmentResourcesScreen */}
        <Stack.Screen 
          name="GovernmentResourcesScreen" 
          component={GovernmentResourcesScreen}
          options={{ headerShown: false }} /* Add this line */
        />

        {/* PrivacyPolicyScreen */}
        <Stack.Screen 
          name="PrivacyPolicyScreen" 
          component={PrivacyPolicyScreen}
          options={{ headerShown: false }} /* Add this line */
        />

        {/* SecuritySettingsScreen */}
        <Stack.Screen 
          name="SecuritySettingsScreen" 
          component={SecuritySettingsScreen}
          options={{ headerShown: false }} /* Add this line */
        />

        {/* SettingsScreen */}
        <Stack.Screen 
          name="SettingsScreen" 
          component={SettingsScreen}
          options={{ headerShown: false }} /* Add this line */
        />

        
        {/* ResetPasswordScreen */}
        <Stack.Screen 
          name="ResetPasswordScreen" 
          component={ResetPasswordScreen}
          options={{ headerShown: false }} /* Add this line */
        />

        {/* ChangeUserScreen */}
        <Stack.Screen 
          name="ChangeUserScreen" 
          component={ChangeUserScreen} 
          options={{ headerShown: false }} // Hide header for a cleaner look
        />

        {/* NearbyProductsScreen */}
        <Stack.Screen 
          name="NearbyProductsScreen" 
          component={NearbyProductsScreen} 
          options={{ title: "Nearby Products" }} 
        />

    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;