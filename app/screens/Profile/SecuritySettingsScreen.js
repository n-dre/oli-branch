import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Switch, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const SecuritySettingsScreen = () => {
  // State variables for toggling security features
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [loginAlerts, setLoginAlerts] = useState(false);

  // Handlers for updating security settings
  const handlePasswordChange = () => {
    Alert.alert('Change Password', 'This feature allows you to update your password securely.');
  };

  const handleTwoFactorToggle = () => {
    setTwoFactorAuth(!twoFactorAuth);
    Alert.alert('Two-Factor Authentication', `Two-factor authentication is now ${!twoFactorAuth ? 'enabled' : 'disabled'}.`);
  };

  const handleLoginAlertsToggle = () => {
    setLoginAlerts(!loginAlerts);
    Alert.alert('Login Alerts', `Login alerts are now ${!loginAlerts ? 'enabled' : 'disabled'}.`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Security Settings</Text>

        {/* Two-Factor Authentication */}
        <View style={styles.settingContainer}>
          <Text style={styles.settingTitle}>Two-Factor Authentication</Text>
          <Text style={styles.settingDescription}>
            Add an extra layer of security by requiring a verification code in addition to your password.
          </Text>
          <Switch
            value={twoFactorAuth}
            onValueChange={handleTwoFactorToggle}
          />
        </View>

        {/* Login Alerts */}
        <View style={styles.settingContainer}>
          <Text style={styles.settingTitle}>Login Alerts</Text>
          <Text style={styles.settingDescription}>
            Receive notifications whenever there’s a new login to your account.
          </Text>
          <Switch
            value={loginAlerts}
            onValueChange={handleLoginAlertsToggle}
          />
        </View>

        {/* Change Password Option */}
        <View style={styles.settingContainer}>
          <Text style={styles.settingTitle}>Change Password</Text>
          <Text style={styles.settingDescription}>
            Update your password regularly to keep your account secure.
          </Text>
          <TouchableOpacity style={styles.changePasswordButton} onPress={handlePasswordChange}>
            <Text style={styles.changePasswordButtonText}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E4C9D',
    textAlign: 'center',
    marginBottom: 20,
  },
  settingContainer: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  settingTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 5,
  },
  settingDescription: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 10,
  },
  changePasswordButton: {
    backgroundColor: '#2E4C9D',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  changePasswordButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SecuritySettingsScreen;
