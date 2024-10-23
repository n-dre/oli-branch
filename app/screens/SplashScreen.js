import React, { useEffect } from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Set a timeout to navigate to WelcomeScreen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('WelcomeScreen');  // Navigate to your next screen
    }, 3000);  // Splash screen will be visible for 3 seconds

    return () => clearTimeout(timer);  // Cleanup the timer when the component unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Centered logo image */}
      <Image
        source={require('../assets/splash.png')}  // Replace with your red "O" image
        style={styles.logo}
      />

      {/* Footer image */}
      <Image
        source={require('../assets/oli-branch.png')}  // Replace with your "Oli-Branch" image
        style={styles.footer}
      />

      {/* Optional: Customize the status bar */}
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // Center the logo vertically
    alignItems: 'center',
    backgroundColor: '#F5F5F5',  // White background, as in your screenshot
  },
  logo: {
    width: 350,  // Adjust size of the main "O" logo based on your image size
    height: 200,
    resizeMode: 'contain',  // Keeps the aspect ratio
  },
  footer: {
    position: 'absolute',
    bottom: 50,  // Adjust positioning based on how you want it near the bottom
    width: 90,  // Adjust size of "Oli-Branch" text image
    height: 30,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
