// components/NavBar.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons
import DashboardScreen from '../screens/DashboardScreen';
import FinancialHealthScreen from '../screens/FinancialHealthScreen';
import BankingProductsScreen from '../screens/BankingProductsScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Dashboard') {
            iconName = 'ios-home';
          } else if (route.name === 'Financial Health') {
            iconName = 'ios-stats-chart';
          } else if (route.name === 'Banking Products') {
            iconName = 'ios-card';
          } else if (route.name === 'Resources') {
            iconName = 'ios-book';
          } else if (route.name === 'Settings') {
            iconName = 'ios-settings';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2E4C9D', // Active tab color
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Financial Health" component={FinancialHealthScreen} />
      <Tab.Screen name="Banking Products" component={BankingProductsScreen} />
      <Tab.Screen name="Resources" component={ResourcesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default NavBar;
