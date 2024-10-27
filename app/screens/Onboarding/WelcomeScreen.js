import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Simulate registered users (for login purposes)
  const [registeredUsers, setRegisteredUsers] = useState([
    { email: 'test@apple.com', password: 'apple123' },  // Sample Apple user
    { email: 'test@google.com', password: 'google123' }  // Sample Google user
  ]);

  const [passwordVisible, setPasswordVisible] = useState(false);  // Toggle for password visibility
  const [isAppleLoginVisible, setAppleLoginVisible] = useState(false);
  const [isGoogleLoginVisible, setGoogleLoginVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle Login function for Apple or Google
const handleLogin = (platform) => {
  // Validate email and password
    const user = registeredUsers.find((user) => user.email === email && user.password === password);
    if (user) {
    // Navigate to DashboardScreen with user data
    navigation.navigate('LoginScreen', {
      userData: {
        email: user.email,
        username: 'SampleUser',  // You can replace this with actual data
        password: user.password
      }
    });
    setErrorMessage('');
    if (platform === 'Apple') {
      setAppleLoginVisible(false);
    } else {
      setGoogleLoginVisible(false);
    }
    } else {
      setErrorMessage('Invalid email or password. Please try again.');
  }
};

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo Image */}
      <Image 
        source={require('../assets/oli-branch.png')}  // Replace with your logo image
        style={styles.logo} 
      />

      {/* Welcome Message */}
      <Text style={styles.welcomeText}>
        Welcome back
      </Text>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/key-icon.png')}  // Path to your key icon
          style={styles.icon}  // Apply the style for the icon
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={!passwordVisible}  // Toggle password visibility based on the state
          style={styles.input}
          placeholderTextColor="#C4C4C4"  // Light grey placeholder color
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Image
            source={
              passwordVisible
                ? require('../assets/eye-open.png')  // Path to your "eye open" icon
                : require('../assets/eye-closed.png')  // Path to your "eye closed" icon
            }
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton} onPress={() => console.log('Sign in button pressed')}>
        <Text style={styles.signInButtonText}>Sign in</Text>
      </TouchableOpacity>

      {/* Divider */}
      <Text style={styles.orText}>or</Text>

      {/* Sign In with Apple */}
      <TouchableOpacity style={styles.appleButton} onPress={() => setAppleLoginVisible(true)}>
        <View style={styles.buttonContent}>
          <Image
            source={require('../assets/apple-icon.png')} // Add the Apple icon image here
            style={styles.buttonIcon}  // Apply the style for the button icon
          />
          <Text style={styles.appleButtonText}>Sign in with Apple</Text>
        </View>
      </TouchableOpacity>

      {/* Sign In with Google */}
      <TouchableOpacity style={styles.googleButton} onPress={() => setGoogleLoginVisible(true)}>
        <View style={styles.buttonContent}>
          <Image
            source={require('../assets/google-icon.png')} // Add the Google icon image here
            style={styles.buttonIcon}  // Apply the style for the button icon
          />
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </View>
      </TouchableOpacity>

      {/* Account Information */}
      <Text style={styles.accountInfoText}>
        Already have an Oli-Branch account?
      </Text>
      <Text style={styles.accountInfoDetails}>
        If you sign in with Apple or Google, your email address needs to match the one we have on file.
      </Text>

      {/* Create Account Link */}
      <View style={styles.createAccountContainer}>
        <Text style={styles.createAccountText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('GetStartedScreen')}>
          <Text style={styles.createAccountLink}> Create </Text>
        </TouchableOpacity>
      </View>

      {/* Language Option */}
      <TouchableOpacity onPress={() => console.log('Language option pressed')}>
        <Text style={styles.languageOption}>Español</Text>
      </TouchableOpacity>

      {/* Footer Links */}
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ResetPasswordScreen')}>
          <Text style={styles.footerLink}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Change User pressed')}>
          <Text style={styles.footerLink}>Change User</Text>
        </TouchableOpacity>
      </View>
     
      <Modal
        visible={isAppleLoginVisible}
        animationType="slide"
        transparent={true}
      >
      <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Apple Login</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.modalInput}
      />
      <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.modalInput}
      />
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={() => handleLogin('Apple')}>
        <Text style={styles.buttonText}>Login with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
    // Reset the state for email, password, and error message when closing the modal
          setAppleLoginVisible(false);
          setEmail('');
          setPassword('');
          setErrorMessage('');
      }}>
        <Text style={styles.modalClose}>Cancel</Text>
      </TouchableOpacity>
        </View>
      </View>
      </Modal>
      {/* Apple Login Modal */}
      <Modal
        visible={isAppleLoginVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Apple Login</Text>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={styles.modalInput}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={styles.modalInput}
            />
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
            <TouchableOpacity style={styles.button} onPress={() => handleLogin('Apple')}>
              <Text style={styles.buttonText}>Login with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setAppleLoginVisible(false)}>
              <Text style={styles.modalClose}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Google Login Modal */}
      <Modal
        visible={isGoogleLoginVisible}
        animationType="slide"
        transparent={true}
>
      <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Google Login</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.modalInput}
      />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.modalInput}
      />
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={() => handleLogin('Google')}>
          <Text style={styles.buttonText}>Login with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
        // Reset the state for email, password, and error message when closing the modal
        setGoogleLoginVisible(false);
        setEmail('');
        setPassword('');
        setErrorMessage('');
      }}>
          <Text style={styles.modalClose}>Cancel</Text>
        </TouchableOpacity>
      </View>
      </View>
    </Modal>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '90%',
    borderBottomWidth: 0, // Removed the bottom border
    borderBottomColor: 'none',  // No border color
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingVertical: 10,
    borderWidth: 0,  // Ensures no border
    outlineStyle: 'none',  // For web, removes focus outline
    shadowColor: 'transparent',  // Ensures there's no shadow effect
  },
  eyeIcon: {
    width: 20,
    height: 20,                                                                                                                                 
    tintColor: '#888',
  },
  signInButton: {
    backgroundColor: '#2E4C9D',
    paddingVertical: 12,
    width: '90%',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 15,
  },
  signInButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  orText: {
    color: '#8E8E93',
    marginBottom: 15,
  },
  appleButton: {
    backgroundColor: '#000000',
    paddingVertical: 12,
    width: '90%',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 15,
  },
  appleButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  googleButton: {
    backgroundColor: '#4285F4',
    paddingVertical: 12,
    width: '90%',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 30,
  },
  googleButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  accountInfoText: {
    fontSize: 14,
    color: '#4A4A4A',
    fontWeight: 'bold',
    textAlign: 'left',
    width: '90%',
    marginBottom: 5,
  },
  accountInfoDetails: {
    fontSize: 12,
    color: '#4A4A4A',
    textAlign: 'left',
    marginBottom: 30,
    width: '90%',
  },
  createAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  createAccountText: {
    color: '#1A1A1A',
    fontSize: 14,
  },
  createAccountLink: {
    color: '#2E4C9D',
    fontSize: 16,
    fontWeight: 'bold',
  },
  languageOption: {
    fontSize: 14,
    color: '#1A1A1A',
    marginBottom: 30,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  footerLink: {
    color: '#2E4C9D',
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  modalInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  modalClose: {
    textAlign: 'center',
    color: '#2E4C9D',
    fontSize: 16,
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default WelcomeScreen;
