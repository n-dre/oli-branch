// app/services/userService.js

import AsyncStorage from '@react-native-async-storage/async-storage';

export const savePreferences = async (prefs) => {
  try {
    await AsyncStorage.setItem('preferences', JSON.stringify(prefs));
  } catch (error) {
    console.error('Failed to save preferences:', error);
    throw error;
  }
};

export const getPreferences = async () => {
  try {
    const prefs = await AsyncStorage.getItem('preferences');
    return prefs ? JSON.parse(prefs) : null;
  } catch (error) {
    console.error('Failed to get preferences:', error);
    throw error;
  }
};
