import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PersonalInfoScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleNext = () => {
    // Collecting user data
    const userData = { name, email, password, confirmPassword, phone };
    console.log('User data:', userData);
    // Proceed to the next screen
    navigation.navigate('BusinessInfoScreen');  // Navigate to Business Info Screen

    // Sending the data to the backend using fetch
    fetch('https://your-backend-url.com/api/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Account created successfully!', data);
        // After successful creation, navigate to the next screen or dashboard
        navigation.navigate('DashboardScreen'); // Replace with your actual next screen
      })
      .catch(error => {
        console.error('Error creating account:', error);
        // You can handle errors here, like showing an alert
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Personal Information</Text>

      {/* Full Name Field */}
      <Text style={styles.label}>Full Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />

<TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

      {/* Next Button */}
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',  // White background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E4C9D', // Blue text
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E4C9D',  // Blue label text
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#C4C4C4',  // Light grey border
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#2E4C9D',  // Blue button background
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PersonalInfoScreen;