import React, { useState } from 'react';
import { SafeAreaView, View, Text, Picker, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';  // Correct import from react-native-elements

const FinancialStatusScreen = ({ navigation }) => {
  const [annualRevenue, setAnnualRevenue] = useState('');
  const [hasDebts, setHasDebts] = useState(null);
  const [debtAmount, setDebtAmount] = useState('');
  const [fundingNeeds, setFundingNeeds] = useState('');
  const [preferredSource, setPreferredSource] = useState({
    bankLoans: false,
    grants: false,
    investors: false,
    crowdfunding: false,
    other: false,
  });
  const [otherSourceDetails, setOtherSourceDetails] = useState('');  // State for text input of "Other"

  const handleNext = () => {
    // Navigate to the next screen
    navigation.navigate('BusinessPreferencesScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Current Financial Status</Text>

      {/* Annual Revenue */}
      <Text style={styles.label}>Annual Revenue:</Text>
      <Picker
        selectedValue={annualRevenue}
        style={styles.picker}
        onValueChange={(itemValue) => setAnnualRevenue(itemValue)}>
        <Picker.Item label="Select Revenue" value="" />
        <Picker.Item label="<$50,000" value="<50K" />
        <Picker.Item label="$50,000 - $100,000" value="50K-100K" />
        <Picker.Item label="$100,000 - $500,000" value="100K-500K" />
        <Picker.Item label="$500,000 - $1M" value="500K-1M" />
        <Picker.Item label="$1M - $5M" value="1M-5M" />
        <Picker.Item label=">$5M" value="5M+" />
      </Picker>

      {/* Existing Debts */}
      <Text style={styles.label}>Existing Debts:</Text>
      <View style={styles.radioGroup}>
        <View style={styles.radioOption}>
          <CheckBox
            checked={hasDebts === 'yes'}
            onPress={() => setHasDebts('yes')}
            checkedColor="#2E4C9D"  // Blue checkmark color
            uncheckedColor="#ccc"   // Gray unchecked box color
          />
          <Text style={styles.radioText}>Yes</Text>
        </View>
        <View style={styles.radioOption}>
          <CheckBox
            checked={hasDebts === 'no'}
            onPress={() => setHasDebts('no')}
            checkedColor="#2E4C9D"  // Blue checkmark color
            uncheckedColor="#ccc"   // Gray unchecked box color
          />
          <Text style={styles.radioText}>No</Text>
        </View>
      </View>

      {/* If Yes, specify debt amount */}
      {hasDebts === 'yes' && (
        <TextInput
          style={styles.input}
          value={debtAmount}
          onChangeText={setDebtAmount}
          placeholder="If Yes, specify amount"
        />
      )}

      {/* Funding Needs */}
      <Text style={styles.label}>Funding Needs:</Text>
      <Picker
        selectedValue={fundingNeeds}
        style={styles.picker}
        onValueChange={(itemValue) => setFundingNeeds(itemValue)}>
        <Picker.Item label="Select Funding Needs" value="" />
        <Picker.Item label="Not Currently Seeking" value="not-seeking" />
        <Picker.Item label="<$50,000" value="<50K" />
        <Picker.Item label="$50,000 - $100,000" value="50K-100K" />
        <Picker.Item label="$100,000 - $500,000" value="100K-500K" />
        <Picker.Item label="$500,000 - $1M" value="500K-1M" />
        <Picker.Item label=">$1M" value="1M+" />
      </Picker>

      {/* Preferred Funding Source */}
      <Text style={styles.label}>Preferred Funding Source:</Text>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkbox}>
          <CheckBox
            checked={preferredSource.bankLoans}
            onPress={() =>
              setPreferredSource({ ...preferredSource, bankLoans: !preferredSource.bankLoans })
            }
            checkedColor="#2E4C9D"  // Blue checkmark color
            uncheckedColor="#ccc"   // Gray unchecked box color
          />
          <Text style={styles.checkboxLabel}>Bank Loans</Text>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            checked={preferredSource.grants}
            onPress={() =>
              setPreferredSource({ ...preferredSource, grants: !preferredSource.grants })
            }
            checkedColor="#2E4C9D"  // Blue checkmark color
            uncheckedColor="#ccc"   // Gray unchecked box color
          />
          <Text style={styles.checkboxLabel}>Government Grants</Text>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            checked={preferredSource.investors}
            onPress={() =>
              setPreferredSource({ ...preferredSource, investors: !preferredSource.investors })
            }
            checkedColor="#2E4C9D"  // Blue checkmark color
            uncheckedColor="#ccc"   // Gray unchecked box color
          />
          <Text style={styles.checkboxLabel}>Private Investors</Text>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            checked={preferredSource.crowdfunding}
            onPress={() =>
              setPreferredSource({ ...preferredSource, crowdfunding: !preferredSource.crowdfunding })
            }
            checkedColor="#2E4C9D"  // Blue checkmark color
            uncheckedColor="#ccc"   // Gray unchecked box color
          />
          <Text style={styles.checkboxLabel}>Crowdfunding</Text>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            checked={preferredSource.other}
            onPress={() =>
              setPreferredSource({ ...preferredSource, other: !preferredSource.other })
            }
            checkedColor="#2E4C9D"  // Blue checkmark color
            uncheckedColor="#ccc"   // Gray unchecked box color
          />
          <Text style={styles.checkboxLabel}>Other</Text>
        </View>
      </View>

      {/* If "Other" is selected, show a text input for the user to specify */}
      {preferredSource.other && (
        <TextInput
          style={[styles.input, { height: 100 }]}  // Make the input larger to resemble a text area
          value={otherSourceDetails}
          onChangeText={setOtherSourceDetails}
          placeholder="Please specify other funding sources..."
          multiline={true}  // Allow multiline input for a text area
        />
      )}

      {/* Continue Button */}
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      {/* Skip Button */}
      <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('BusinessPreferencesScreen')}>
        <Text style={styles.skipText}>Skip</Text>
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
    height: 30,
    marginBottom: 12,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  input: {
    height: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  checkboxContainer: {
    marginBottom: 20,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    fontSize: 16,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#2E4C9D',  // Blue button background
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  skipButton: {
    marginTop: 10,
    alignSelf: 'center',
  },
  skipText: {
    color: '#2E4C9D',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default FinancialStatusScreen;

