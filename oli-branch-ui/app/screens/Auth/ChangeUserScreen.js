import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Sample data: Previously used accounts (can be replaced with real data if stored locally)
const previousAccounts = [
  { id: '1', email: 'user1@example.com' },
  { id: '2', email: 'user2@example.com' },
  { id: '3', email: 'user3@example.com' }
];

const ChangeUserScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleLoginAsDifferentUser = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter an email address.');
      return;
    }

    // Simulate login process
    Alert.alert('Switched Account', `Now signed in as ${email}`);
    navigation.navigate('DashboardScreen'); // Navigate to the dashboard or main screen
  };

  const handleSelectPreviousAccount = (accountEmail) => {
    setEmail(accountEmail);
    Alert.alert('Switched Account', `Now signed in as ${accountEmail}`);
    navigation.navigate('DashboardScreen'); // Navigate to the dashboard or main screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Change User</Text>
      <Text style={styles.instructions}>Enter an email to switch accounts or select from previously used accounts.</Text>

      {/* Input for Email */}
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Confirm Button */}
      <TouchableOpacity style={styles.switchButton} onPress={handleLoginAsDifferentUser}>
        <Text style={styles.buttonText}>Switch Account</Text>
      </TouchableOpacity>

      {/* List of Previous Accounts */}
      <Text style={styles.subTitle}>Previously Used Accounts:</Text>
      <FlatList
        data={previousAccounts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.accountItem} onPress={() => handleSelectPreviousAccount(item.email)}>
            <Text style={styles.accountText}>{item.email}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.noAccountText}>No previous accounts found</Text>}
      />

      {/* Cancel Button */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E4C9D', // Blue text color
    textAlign: 'center',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
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
  switchButton: {
    backgroundColor: '#2E4C9D',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2E4C9D',
    marginBottom: 10,
  },
  accountItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginVertical: 5,
  },
  accountText: {
    fontSize: 16,
    color: '#333333',
  },
  noAccountText: {
    fontSize: 16,
    color: '#888888',
    textAlign: 'center',
    marginTop: 10,
  },
  cancelText: {
    color: '#2E4C9D',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ChangeUserScreen;
