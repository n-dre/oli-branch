import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = () => {
    // Ensure fields are filled
    if (!name || !email || !password || !confirmPassword || !phone) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }

    // Ensure password and confirm password match
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    // Perform the fetch call
    fetch('https://your-api-endpoint.com/create-account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        confirmPassword,
        phone,
      }),
    })
      .then(async (response) => {
        // Check if response is JSON or not based on the Content-Type header
        const contentType = response.headers.get('Content-Type');

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error:', response.status, response.statusText);
          Alert.alert('Error', errorText);
          return;
        }

        // Check if the response is in JSON format
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();  // Parse the JSON response
          console.log('Parsed data:', data);
          Alert.alert('Success', 'Account created successfully!');
        } else {
          const text = await response.text();  // Handle non-JSON response (e.g., HTML error page)
          console.error('Received non-JSON response:', text);
          Alert.alert('Error', 'Unexpected response from the server.');
        }
      })
      .catch((error) => {
        console.error('Error creating account:', error);
        Alert.alert('Error', 'Failed to create account. Please try again.');
      });
  };

  return (
    <View>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
      <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegistrationScreen;



