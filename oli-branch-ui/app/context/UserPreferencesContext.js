import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserPreferencesContext = createContext();

export const UserPreferencesProvider = ({ children }) => {
  const [preferences, setPreferences] = useState({});

  useEffect(() => {
    const loadPreferences = async () => {
      const storedPreferences = await AsyncStorage.getItem('preferences');
      if (storedPreferences) setPreferences(JSON.parse(storedPreferences));
    };
    loadPreferences();
  }, []);

  const savePreferences = async (newPreferences) => {
    const updatedPreferences = { ...preferences, ...newPreferences };
    setPreferences(updatedPreferences);
    await AsyncStorage.setItem('preferences', JSON.stringify(updatedPreferences));
  };

  return (
    <UserPreferencesContext.Provider value={{ preferences, savePreferences }}>
      {children}
    </UserPreferencesContext.Provider>
  );
};

export default UserPreferencesContext;
