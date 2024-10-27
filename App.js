import React from 'react';
import AppNavigator from './app/navigation/AppNavigator'; // Ensure the correct path to AppNavigator
import { AuthProvider } from './hooks/useAuth';
import { UserPreferencesProvider } from './hooks/useUserPreferences';

export default function App() {
  return (
    <AuthProvider>
      <UserPreferencesProvider>
        <AppNavigator />
      </UserPreferencesProvider>
    </AuthProvider>
  );
}
