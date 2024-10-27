// app/hooks/useUserPreferences.js

import { useState, useContext, createContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserPreferencesContext = createContext();

// Custom hook to use UserPreferences context
export const useUserPreferences = () => {
  return useContext(UserPreferencesContext);
};

// Provider component for UserPreferences
export const UserPreferencesProvider = ({ children }) => {
  const [preferences, setPreferences] = useState({});

  // Save preferences to AsyncStorage and state
  const savePreferences = async (prefs) => {
    setPreferences(prefs);
    await AsyncStorage.setItem('preferences', JSON.stringify(prefs));
  };

  // Load preferences from AsyncStorage on initial render
  const loadPreferences = async () => {
    const prefs = await AsyncStorage.getItem('preferences');
    if (prefs) setPreferences(JSON.parse(prefs));
  };

  // Load preferences when the provider mounts
  useEffect(() => {
    loadPreferences();
  }, []);

  return (
    <UserPreferencesContext.Provider value={{ preferences, savePreferences }}>
      {children}
    </UserPreferencesContext.Provider>
  );
};

