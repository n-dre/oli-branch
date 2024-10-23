import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Picker, TouchableOpacity, StyleSheet } from 'react-native';

const IndustryInfoScreen = ({ navigation }) => {
  const [industry, setIndustry] = useState('');
  const [businessSize, setBusinessSize] = useState('');
  const [location, setLocation] = useState('');

  const handleNext = () => {
    // Navigate to the next screen
    navigation.navigate('BusinessGoalsScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Industry Information</Text>

      <Text style={styles.label}>Industry:</Text>
      <Picker
        selectedValue={industry}
        style={styles.picker}
        onValueChange={(itemValue) => setIndustry(itemValue)}>
        <Picker.Item label="Select Industry" value="" />
        <Picker.Item label="Retail" value="Retail" />
        <Picker.Item label="Manufacturing" value="Manufacturing" />
        <Picker.Item label="Healthcare" value="Healthcare" />
        {/* Add other options here */}
      </Picker>

      <Text style={styles.label}>Business Size:</Text>
      <Picker
        selectedValue={businessSize}
        style={styles.picker}
        onValueChange={(itemValue) => setBusinessSize(itemValue)}>
        <Picker.Item label="Select Business Size" value="" />
        <Picker.Item label="Sole Proprietorship" value="Sole Proprietorship" />
        <Picker.Item label="1-10 Employees" value="1-10 Employees" />
        {/* Add other options here */}
      </Picker>

      <Text style={styles.label}>Business Location:</Text>
      <TextInput
        style={styles.input}
        placeholder="City, State, Zip Code"
        value={location}
        onChangeText={setLocation}
      />

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
    marginBottom: 10,
  },
  picker: {
    height: 50,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
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

export default IndustryInfoScreen;