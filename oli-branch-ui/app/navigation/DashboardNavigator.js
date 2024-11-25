// navigation/DashboardNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../screens/DashboardScreen';
import FinancialHealthScreen from '../screens/FinancialHealthScreen';
import BankingProductsScreen from '../screens/BankingProductsScreen';
import GovernmentResourcesScreen from '../screens/GovernmentResourcesScreen';
import EducationalResourcesScreen from '../screens/EducationalResourcesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';
import AccountSettingsScreen from '../screens/AccountSettingsScreen';
import ChatCommunityScreen from '../screens/ChatCommunityScreen';
import PrivacyPolicyScreen from '../screens/Profile/PrivacyPolicyScreen';
import SecuritySettingsScreen from '../screens/SecuritySettingsScreen';
import NearbyProductsScreen from '../screens/Dashboard/NearbyProductsScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import ChangeUserScreen from '../screens/ChangeUserScreen';

const Stack = createStackNavigator();

const DashboardNavigator = () => (
  <Stack.Navigator initialRouteName="DashboardScreen">
    <Stack.Screen name="DashboardScreen" component={DashboardScreen} options={{ headerShown: false }} />
    <Stack.Screen name="FinancialHealthScreen" component={FinancialHealthScreen} options={{ headerShown: false }} />
    <Stack.Screen name="BankingProductsScreen" component={BankingProductsScreen} options={{ headerShown: false }} />
    <Stack.Screen name="GovernmentResourcesScreen" component={GovernmentResourcesScreen} options={{ headerShown: false }} />
    <Stack.Screen name="EducationalResourcesScreen" component={EducationalResourcesScreen} options={{ headerShown: false }} />
    <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: false }} />
    <Stack.Screen name="AboutScreen" component={AboutScreen} options={{ headerShown: false }} />
    <Stack.Screen name="AccountSettingsScreen" component={AccountSettingsScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ChatCommunityScreen" component={ChatCommunityScreen} options={{ headerShown: false }} />
    <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} options={{ headerShown: false }} />
    <Stack.Screen name="SecuritySettingsScreen" component={SecuritySettingsScreen} options={{ headerShown: false }} />
    <Stack.Screen name="NearbyProductsScreen" component={NearbyProductsScreen} options={{ title: "Nearby Products" }} />
    <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ChangeUserScreen" component={ChangeUserScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default DashboardNavigator;

