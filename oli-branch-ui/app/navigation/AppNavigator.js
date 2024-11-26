// AppNavigator.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DashboardNavigator from './DashboardNavigator';
import { useAuth } from '../hooks/useAuth'; // Assuming useAuth is a hook that provides user authentication status

const AppNavigator = () => {
  const { user } = useAuth(); // Check if user is authenticated

  return (
    <NavigationContainer>
      {user ? <DashboardNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;

 