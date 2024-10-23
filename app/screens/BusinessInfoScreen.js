import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';  // Correct import from react-native-elements

const BusinessInfoScreen = ({ navigation }) => {
  const [businessName, setBusinessName] = useState('');
  const [ein, setEin] = useState('');
  const [duns, setDuns] = useState('');
  const [notApplicable, setNotApplicable] = useState(false);
  
  const [einError, setEinError] = useState('');  // State for EIN error message
  const [dunsError, setDunsError] = useState('');  // State for DUNS error message

  // Function to validate EIN format (XX-XXXXXXX)
  const validateEIN = (ein) => {
    const einPattern = /^\d{2}-\d{7}$/;  // Regular expression to match EIN format
    return einPattern.test(ein);
  };

  // Function to validate DUNS format (9 digits)
  const validateDUNS = (duns) => {
    const dunsPattern = /^\d{9}$/;  // Regular expression to match 9 digits
    return dunsPattern.test(duns);
  };

  const handleNext = () => {
    let valid = true;

    // Reset error messages
    setEinError('');
    setDunsError('');

    console.log("Starting validation...");

    // Skip validation if "Not Applicable" is checked
    if (!notApplicable) {
      // Validate EIN if not 'Not Applicable'
      if (!validateEIN(ein)) {
        console.log("EIN is invalid.");
        setEinError('Please enter a valid EIN number in the format XX-XXXXXXX.');  // Set EIN error message
        valid = false;
      }

      // Validate DUNS number only if provided (optional)
      if (duns && !validateDUNS(duns)) {
        console.log("DUNS is invalid.");
        setDunsError('Please enter a valid DUNS number (9 digits).');  // Set DUNS error message
        valid = false;
      }
    }

    if (valid) {
      const businessData = { ein, duns, notApplicable };
      console.log('Business data is valid:', businessData);

      // Navigate to the next screen
      navigation.navigate('IndustryInfoScreen');  // Navigate to next screen
    } else {
      console.log("Validation failed. No navigation.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Business Information</Text>

      <TextInput
        style={styles.input}
        placeholder="Business Name"
        value={businessName}
        onChangeText={setBusinessName}
      />

      {/* EIN Number */}
      <TextInput
        style={styles.input}
        placeholder="EIN Number (XX-XXXXXXX)"
        value={ein}
        onChangeText={setEin}
        editable={!notApplicable}  // Disabled if "Not Applicable" is checked
        keyboardType="numeric"
      />
      {einError ? <Text style={styles.errorText}>{einError}</Text> : null}  {/* EIN Error message */}

      {/* DUNS Number (Optional) */}
      <TextInput
        style={styles.input}
        placeholder="DUNS Number (9 digits) (Optional)"
        value={duns}
        onChangeText={setDuns}
        editable={!notApplicable}  // Disabled if "Not Applicable" is checked
        keyboardType="numeric"
      />
      {dunsError ? <Text style={styles.errorText}>{dunsError}</Text> : null}  {/* DUNS Error message */}

      {/* Not Applicable Checkbox */}
      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={notApplicable}
          onPress={() => setNotApplicable(!notApplicable)}  // Toggle checkbox state
          checkedColor="#2E4C9D"  // Customize checkmark color
          uncheckedColor="#ccc"  // Customize unchecked box color
          containerStyle={{ padding: 0, margin: 0 }}  // Remove default padding/margin
        />
        <Text style={styles.label}>Not Applicable</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2E4C9D',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    marginLeft: 10,
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
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default BusinessInfoScreen;



