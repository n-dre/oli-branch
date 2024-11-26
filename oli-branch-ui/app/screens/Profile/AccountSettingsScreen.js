import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity, Switch, StyleSheet, Alert } from 'react-native';

const AccountSettingsScreen = () => {
  // State for user settings
  const [name, setName] = useState('Sample User');
  const [email, setEmail] = useState('user@example.com');
  const [phone, setPhone] = useState('123-456-7890');
  const [isPrivateAccount, setIsPrivateAccount] = useState(false); // Privacy toggle
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false); // Security toggle

  // Handlers for Save Actions
  const handleSavePersonalInfo = () => {
    Alert.alert('Success', 'Your personal information has been updated.');
  };

  const handleSavePrivacySettings = () => {
    Alert.alert('Success', 'Your privacy settings have been updated.');
  };

  const handleSaveSecuritySettings = () => {
    Alert.alert('Success', 'Your security settings have been updated.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        {/* Title */}
        <Text style={styles.title}>Account Settings</Text>

        {/* Personal Information Section */}
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <TouchableOpacity style={styles.saveButton} onPress={handleSavePersonalInfo}>
          <Text style={styles.buttonText}>Save Personal Info</Text>
        </TouchableOpacity>

        {/* Privacy Settings Section */}
        <Text style={styles.sectionTitle}>Privacy Settings</Text>
        <View style={styles.settingContainer}>
          <Text style={styles.settingLabel}>Private Account</Text>
          <Switch
            value={isPrivateAccount}
            onValueChange={setIsPrivateAccount}
          />
        </View>
        <TouchableOpacity style={styles.saveButton} onPress={handleSavePrivacySettings}>
          <Text style={styles.buttonText}>Save Privacy Settings</Text>
        </TouchableOpacity>

        {/* Security Settings Section */}
        <Text style={styles.sectionTitle}>Security Settings</Text>
        <View style={styles.settingContainer}>
          <Text style={styles.settingLabel}>Enable Two-Factor Authentication</Text>
          <Switch
            value={twoFactorEnabled}
            onValueChange={setTwoFactorEnabled}
          />
        </View>
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveSecuritySettings}>
          <Text style={styles.buttonText}>Save Security Settings</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E4C9D',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#2E4C9D',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  settingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    marginBottom: 15,
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
  },
});

export default AccountSettingsScreen;
