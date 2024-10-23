import React, { useState } from 'react';
import {SafeAreaView,View,Text,TextInput,TouchableOpacity,StyleSheet,Modal,CheckBox} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BusinessPreferencesScreen = () => {
  const navigation = useNavigation();

  const [bankingServices, setBankingServices] = useState({
    checking: false,
    loans: false,
    merchantServices: false,
    investmentAccounts: false,
    insurance: false,
  });
  const [areasOfInterest, setAreasOfInterest] = useState({
    financialPlanning: false,
    taxServices: false,
    legalServices: false,
    marketingServices: false,
    businessConsulting: false,
  });

  const [description, setDescription] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [disagreeTerms, setDisagreeTerms] = useState(false);
  const [policyModalVisible, setPolicyModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');  // <-- Error message state

  const handleSubmit = () => {
    if (agreeTerms && !disagreeTerms) {
      console.log('Submission successful');
      // Navigate back to the WelcomeScreen after submission
      navigation.navigate('WelcomeScreen');
    } else {
      setErrorMessage('You must agree to the terms and conditions before submitting.');  // Set error message
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Business Preferences</Text>

      {/* Preferred Banking Services */}
      <Text style={styles.label}>Preferred Banking Services:</Text>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkbox}>
          <CheckBox
            value={bankingServices.checking}
            onValueChange={() => setBankingServices({ ...bankingServices, checking: !bankingServices.checking })}
          />
          <Text style={styles.checkboxLabel}>Checking/Saving Accounts</Text>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            value={bankingServices.loans}
            onValueChange={() => setBankingServices({ ...bankingServices, loans: !bankingServices.loans })}
          />
          <Text style={styles.checkboxLabel}>Business Loans</Text>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            value={bankingServices.merchantServices}
            onValueChange={() => setBankingServices({ ...bankingServices, merchantServices: !bankingServices.merchantServices })}
          />
          <Text style={styles.checkboxLabel}>Merchant Services</Text>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            value={bankingServices.investmentAccounts}
            onValueChange={() => setBankingServices({ ...bankingServices, investmentAccounts: !bankingServices.investmentAccounts })}
          />
          <Text style={styles.checkboxLabel}>Investment Accounts</Text>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            value={bankingServices.insurance}
            onValueChange={() => setBankingServices({ ...bankingServices, insurance: !bankingServices.insurance })}
          />
          <Text style={styles.checkboxLabel}>Insurance</Text>
        </View>
      </View>

      {/* Areas of Interest */}
      <Text style={styles.label}>Areas of Interest:</Text>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkbox}>
          <CheckBox
            value={areasOfInterest.financialPlanning}
            onValueChange={() => setAreasOfInterest({ ...areasOfInterest, financialPlanning: !areasOfInterest.financialPlanning })}
          />
          <Text style={styles.checkboxLabel}>Financial Planning</Text>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            value={areasOfInterest.taxServices}
            onValueChange={() => setAreasOfInterest({ ...areasOfInterest, taxServices: !areasOfInterest.taxServices })}
          />
          <Text style={styles.checkboxLabel}>Tax Services</Text>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            value={areasOfInterest.legalServices}
            onValueChange={() => setAreasOfInterest({ ...areasOfInterest, legalServices: !areasOfInterest.legalServices })}
          />
          <Text style={styles.checkboxLabel}>Legal Services</Text>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            value={areasOfInterest.marketingServices}
            onValueChange={() => setAreasOfInterest({ ...areasOfInterest, marketingServices: !areasOfInterest.marketingServices })}
          />
          <Text style={styles.checkboxLabel}>Marketing Services</Text>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            value={areasOfInterest.businessConsulting}
            onValueChange={() => setAreasOfInterest({ ...areasOfInterest, businessConsulting: !areasOfInterest.businessConsulting })}
          />
          <Text style={styles.checkboxLabel}>Business Consulting</Text>
        </View>
      </View>

      {/* Brief Description of Business */}
      <Text style={styles.label}>Brief Description of Your Business:</Text>
      <TextInput
        style={styles.textArea}
        value={description}
        onChangeText={setDescription}
        placeholder="Text Area"
        multiline
      />

      {/* Terms and Conditions */}
      <Text style={styles.label}>Terms and Conditions:</Text>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkbox}>
          <CheckBox
            value={agreeTerms}
            onValueChange={() => {
              setAgreeTerms(!agreeTerms);
              setDisagreeTerms(false);  // Uncheck the disagree option
              setPolicyModalVisible(true);  // Show modal to read policies
            }}
          />
          <Text style={styles.checkboxLabel}>I agree to the Terms and Conditions and Privacy Policy.</Text>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            value={disagreeTerms}
            onValueChange={() => {
              setDisagreeTerms(!disagreeTerms);
              setAgreeTerms(false);  // Uncheck the agree option
            }}
          />
          <Text style={styles.checkboxLabel}>I do not agree to the Terms and Conditions and Privacy Policy.</Text>
        </View>
      </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit} disabled={!agreeTerms || disagreeTerms}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>

        {/* Error message display */}
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      {/* Modal for displaying Terms and Conditions */}
      <Modal visible={policyModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Terms and Conditions</Text>
          <Text style={styles.sectionTitle}>1. Introduction</Text>
        <Text style={styles.modalText}>
          Welcome to Oli-Branch! Oli-Branch is committed to providing you with a seamless, personalized experience to help you make smarter financial decisions. By agreeing to our policy, you acknowledge and accept the following:
        </Text>

        <Text style={styles.sectionTitle}>2. Personalized Financial Recommendations</Text>
        <Text style={styles.modalText}>
          We offer financial insights tailored to your specific profile, goals, and needs. While we strive to provide accurate and valuable recommendations, you acknowledge that all financial decisions should be made with proper consideration of your unique financial situation.
        </Text>

        <Text style={styles.sectionTitle}>3. Data Collection and Privacy</Text>
        <Text style={styles.modalText}>
          We collect personal and financial information to provide the best possible service. This information will be used in accordance with our Privacy Policy, ensuring your data is handled securely and responsibly.
        </Text>

        <Text style={styles.sectionTitle}>4. Affiliate and Third-Party Offers</Text>
        <Text style={styles.modalText}>
          Some of the financial products and services we recommend may come from affiliates or third-party partners. Rest assured, our recommendations are driven by value and not solely by commissions.
        </Text>

        <Text style={styles.sectionTitle}>5. Premium Content</Text>
        <Text style={styles.modalText}>
          Certain advanced analytics and exclusive insights are available through our premium membership. You acknowledge that premium content access requires subscription to this service.
        </Text>

        <Text style={styles.sectionTitle}>6. Community Participation</Text>
        <Text style={styles.modalText}>
          When engaging in community discussions or learning sessions, you agree to conduct yourself respectfully and in accordance with community guidelines.
        </Text>

        <Text style={styles.sectionTitle}>7. Security Agreement</Text>
        <Text style={styles.modalText}>
          At Oli-Branch, your security is our top priority. We employ advanced technology to safeguard your personal and financial data. By agreeing to this security agreement, you confirm the following:
        </Text>

        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>• All personal and financial information you provide is encrypted and stored securely.</Text>
          <Text style={styles.bulletItem}>• Our platform follows industry standards to prevent unauthorized access or breaches.</Text>
          <Text style={styles.bulletItem}>• You agree not to share your login details with any unauthorized parties.</Text>
          <Text style={styles.bulletItem}>• You agree to notify Oli-Branch immediately if you suspect any suspicious activity on your account.</Text>
        </View>

        <Text style={styles.sectionTitle}>8. Third-Party Services</Text>
        <Text style={styles.modalText}>
          While Oli-Branch employs robust security measures, some services may be provided by third-party partners. By using such services, you agree to the security practices of those partners.
        </Text>

        <Text style={styles.sectionTitle}>9. Fraud Prevention</Text>
        <Text style={styles.modalText}>
          Oli-Branch takes proactive steps to prevent fraudulent activity. However, you acknowledge that your vigilance is necessary. Always review your financial information and notify us of any discrepancies.
        </Text>
          <TouchableOpacity
            style={styles.agreeButton}
            onPress={() => setPolicyModalVisible(false)}
          >
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  textArea: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  // Existing styles
  errorText: {
    color: 'red',  // Red color for error message
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#E74C3C',  // Red submit button
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'left',
    alignItems: 'left',
    padding: 10,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    maxHeight: '80%',  // Limit height for scrolling
  },
  scrollContainer: {
    width: '90%',
    paddingHorizontal: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000', // Black color for titles
    marginBottom: 10,
    textAlign: 'left', // Align left
  },
  modalText: {
    fontSize: 12,
    color: '#333',
    marginBottom: 20,
    textAlign: 'left', // Align left
  },
  bulletList: {
    marginBottom: 20,
    textAlign: 'left',  // Ensure bullet points are left-aligned
  },
  bulletItem: {
    fontSize: 12,
    color: '#333',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  agreeButton: {
    backgroundColor: '#2E4C9D',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',  // Center the close button
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default BusinessPreferencesScreen;

