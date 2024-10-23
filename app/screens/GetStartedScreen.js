import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GetStartedScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome to Oli-Branch!</Text>

      {/* Subtitle Text */}
      <Text style={styles.subtitleText}>
        Empowering your financial journey with advanced tools.
      </Text>

      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={() => navigation.navigate('PersonalInfoScreen')}
      >
        <Text style={styles.getStartedButtonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E4C9D', // Blue text
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitleText: {
    fontSize: 16,
    color: '#555555', // Grey text
    textAlign: 'center',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  getStartedButton: {
    backgroundColor: '#E74C3C', // Red button
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  getStartedButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default GetStartedScreen;
