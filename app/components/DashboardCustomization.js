// DashboardCustomization.js
import React from 'react';
import { Button } from 'react-native';
import { useUserPreferences } from '../hooks/useUserPreferences';

const DashboardCustomization = () => {
  const { preferences, savePreferences } = useUserPreferences();

  const updatePreferences = () => {
    savePreferences({ showFinancialHealth: true });
  };

  return (
    <Button title="Save Preferences" onPress={updatePreferences} />
  );
};

export default DashboardCustomization;
