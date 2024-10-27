import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Settings</Text>
        
        {/* Account Settings */}
        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => navigation.navigate('AccountSettingsScreen')}
        >
          <Text style={styles.optionText}>Account Settings</Text>
          <Text style={styles.optionDescription}>Manage your personal information and account details.</Text>
        </TouchableOpacity>

        {/* Privacy Settings */}
        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => navigation.navigate('PrivacyPolicyScreen')}
        >
          <Text style={styles.optionText}>Privacy Policy</Text>
          <Text style={styles.optionDescription}>Review our privacy practices and data handling policies.</Text>
        </TouchableOpacity>

        {/* Security Settings */}
        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => navigation.navigate('SecuritySettingsScreen')}
        >
          <Text style={styles.optionText}>Security Settings</Text>
          <Text style={styles.optionDescription}>Manage your security options, including two-factor authentication.</Text>
        </TouchableOpacity>

        {/* About the App */}
        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => navigation.navigate('AboutScreen')}
        >
          <Text style={styles.optionText}>About Oli-Branch</Text>
          <Text style={styles.optionDescription}>Learn more about Oli-Branch and our mission.</Text>
        </TouchableOpacity>
        
        {/* Log Out Option */}
        <TouchableOpacity
          style={[styles.optionContainer, styles.logoutContainer]}
          onPress={() => console.log('Logging out...')}
        >
          <Text style={[styles.optionText, styles.logoutText]}>Log Out</Text>
        </TouchableOpacity>
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
  optionContainer: {
    padding: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  optionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 5,
  },
  optionDescription: {
    fontSize: 14,
    color: '#666666',
  },
  logoutContainer: {
    backgroundColor: '#E74C3C',
    marginTop: 30,
  },
  logoutText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default SettingsScreen;
