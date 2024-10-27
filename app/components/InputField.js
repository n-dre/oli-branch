import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const InputField = ({ value, onChangeText, placeholder, secureTextEntry, keyboardType }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType || 'default'}
      autoCapitalize="none"
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },
});

export default InputField;
