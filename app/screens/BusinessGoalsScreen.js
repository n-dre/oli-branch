import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Picker, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';  // Correct import from react-native-elements

const BusinessGoalsScreen = ({ navigation }) => {
  const [primaryGoal, setPrimaryGoal] = useState('');
  const [secondaryGoals, setSecondaryGoals] = useState({
    expandOperations: false,
    increaseRevenue: false,
    improveFinancialHealth: false,
    accessFunding: false,
    enhanceDigitalPresence: false,
  });

  const handleNext = () => {
    const selectedSecondaryGoals = Object.keys(secondaryGoals).filter(goal => secondaryGoals[goal]);
    console.log('Primary Goal:', primaryGoal);
    console.log('Secondary Goals:', selectedSecondaryGoals);
    navigation.navigate('FinancialStatusScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Business Goals</Text>

        {/* Primary Business Goal */}
        <Text style={styles.label}>Primary Business Goal:</Text>
        <Picker
          selectedValue={primaryGoal}
          style={styles.picker}
          onValueChange={(itemValue) => setPrimaryGoal(itemValue)}>
          <Picker.Item label="Select Primary Goal" value="" />
          <Picker.Item label="Expand Operations" value="Expand Operations" />
          <Picker.Item label="Increase Revenue" value="Increase Revenue" />
          <Picker.Item label="Improve Financial Health" value="Improve Financial Health" />
          <Picker.Item label="Access Funding" value="Access Funding" />
          <Picker.Item label="Enhance Digital Presence" value="Enhance Digital Presence" />
          <Picker.Item label="Other" value="Other" />
        </Picker>

        {/* Secondary Business Goals */}
        <Text style={styles.label}>Secondary Business Goals:</Text>

        <View style={styles.checkboxContainer}>
          <CheckBox
            checked={secondaryGoals.expandOperations}
            onPress={() => setSecondaryGoals({ ...secondaryGoals, expandOperations: !secondaryGoals.expandOperations })}
            checkedColor="#2E4C9D"  // Blue checkmark color
            uncheckedColor="#ccc"  // Gray unchecked box color
            containerStyle={{ padding: 0, margin: 0 }}
          />
          <Text style={styles.checkboxLabel}>Expand Operations</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            checked={secondaryGoals.increaseRevenue}
            onPress={() => setSecondaryGoals({ ...secondaryGoals, increaseRevenue: !secondaryGoals.increaseRevenue })}
            checkedColor="#2E4C9D"  // Blue checkmark color
            uncheckedColor="#ccc"  // Gray unchecked box color
            containerStyle={{ padding: 0, margin: 0 }}
          />
          <Text style={styles.checkboxLabel}>Increase Revenue</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            checked={secondaryGoals.improveFinancialHealth}
            onPress={() => setSecondaryGoals({ ...secondaryGoals, improveFinancialHealth: !secondaryGoals.improveFinancialHealth })}
            checkedColor="#2E4C9D"  // Blue checkmark color
            uncheckedColor="#ccc"  // Gray unchecked box color
            containerStyle={{ padding: 0, margin: 0 }}
          />
          <Text style={styles.checkboxLabel}>Improve Financial Health</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            checked={secondaryGoals.accessFunding}
            onPress={() => setSecondaryGoals({ ...secondaryGoals, accessFunding: !secondaryGoals.accessFunding })}
            checkedColor="#2E4C9D"  // Blue checkmark color
            uncheckedColor="#ccc"  // Gray unchecked box color
            containerStyle={{ padding: 0, margin: 0 }}
          />
          <Text style={styles.checkboxLabel}>Access Funding</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            checked={secondaryGoals.enhanceDigitalPresence}
            onPress={() => setSecondaryGoals({ ...secondaryGoals, enhanceDigitalPresence: !secondaryGoals.enhanceDigitalPresence })}
            checkedColor="#2E4C9D"  // Blue checkmark color
            uncheckedColor="#ccc"  // Gray unchecked box color
            containerStyle={{ padding: 0, margin: 0 }}
          />
          <Text style={styles.checkboxLabel}>Enhance Digital Presence</Text>
        </View>

        {/* Continue and Skip Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('FinancialStatusScreen')}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    marginTop: 20,
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  checkboxLabel: {
    fontSize: 16,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#2E4C9D',
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

export default BusinessGoalsScreen;


