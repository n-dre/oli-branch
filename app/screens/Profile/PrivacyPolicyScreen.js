import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';

const PrivacyPolicyScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Privacy Policy</Text>

        <Text style={styles.sectionTitle}>Introduction</Text>
        <Text style={styles.sectionText}>
          Welcome to Oli-Branch! We are committed to protecting your privacy and ensuring that your personal information is handled securely. 
          By using Oli-Branch, you agree to the collection, use, and sharing of your information as described in this policy.
        </Text>

        <Text style={styles.sectionTitle}>Data Collection and Use</Text>
        <Text style={styles.sectionText}>
          We collect personal information such as your name, email, and business data to provide tailored financial recommendations. 
          This data allows us to improve our services and offer personalized insights that meet your financial goals.
        </Text>

        <Text style={styles.sectionTitle}>Personalized Recommendations</Text>
        <Text style={styles.sectionText}>
          Through AI and machine learning, we analyze your financial data to offer insights relevant to your business. While we aim to provide accurate advice, 
          please make financial decisions based on your specific situation, as our recommendations are informational.
        </Text>

        <Text style={styles.sectionTitle}>Data Security</Text>
        <Text style={styles.sectionText}>
          Your security is our top priority. We employ industry-standard encryption and security protocols to protect your personal and financial information 
          from unauthorized access and ensure secure data transmission.
        </Text>

        <Text style={styles.sectionTitle}>Third-Party Services</Text>
        <Text style={styles.sectionText}>
          In some instances, Oli-Branch may integrate with third-party services to enhance our offerings. These services are carefully selected and comply 
          with our security standards, though they operate under their own privacy policies.
        </Text>

        <Text style={styles.sectionTitle}>User Rights</Text>
        <Text style={styles.sectionText}>
          You have the right to access, update, or delete your personal information at any time. If you wish to manage your data, please contact our support team. 
          We strive to ensure your data is accurate and handled in accordance with your preferences.
        </Text>

        <Text style={styles.sectionTitle}>Policy Updates</Text>
        <Text style={styles.sectionText}>
          We may update our privacy policy periodically to reflect changes in our practices or regulatory requirements. We encourage you to review this policy 
          from time to time to stay informed about how we protect your information.
        </Text>

        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.sectionText}>
          If you have any questions about our privacy practices, please contact us at support@olibranch.com.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E4C9D',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 20,
    lineHeight: 22,
  },
});

export default PrivacyPolicyScreen;
