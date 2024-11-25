// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './components/NavBar'; // Bottom tab navigation bar
import AppNavigator from './app/navigation/AppNavigator'; // Stack navigation within each tab
import { AuthProvider } from './hooks/useAuth';
import { UserPreferencesProvider } from './hooks/useUserPreferences';

export default function App() {
  return (
    <AuthProvider>
      <UserPreferencesProvider>
        <NavigationContainer>
          <NavBar /> {/* Bottom tab navigation with screens */}
          {/* AppNavigator can be incorporated within the NavBar, or it can be a part of each tab's screen structure */}
        </NavigationContainer>
      </UserPreferencesProvider>
    </AuthProvider>
  );
}
