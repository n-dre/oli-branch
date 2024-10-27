import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, ActivityIndicator, TouchableWithoutFeedback } from 'react-native';

const BusinessInfoScreen = ({ navigation }) => {
  const [ein, setEin] = useState('');
  const [businessData, setBusinessData] = useState(null); // Store business data from API
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // Function to simulate searching for business info based on EIN
  const searchBusinessInfo = async () => {
    if (!ein) {
      alert("Please enter a valid EIN number.");
      return;
    }

    setLoading(true);
    setModalVisible(true);
    try {
      // Simulate an API call to fetch business info based on EIN
      const response = await fetch(`https://api.example.com/business?ein=${ein}`);
      const data = await response.json();

      // Check if business data was found
      if (response.ok && data && data.businessName) {
        setBusinessData(data);
      } else {
        setBusinessData(null);
      }
    } catch (error) {
      console.error('Error fetching business info:', error);
      alert('There was an error fetching the business information. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Business Information</Text>

      {/* EIN Input Field */}
      <Text style={styles.label}>Enter EIN Number:</Text>
      <TextInput
        style={styles.input}
        value={ein}
        onChangeText={setEin}
        placeholder="EIN Number"
        keyboardType="number-pad"
      />

      {/* Search Button */}
      <TouchableOpacity style={styles.button} onPress={searchBusinessInfo}>
        <Text style={styles.buttonText}>Search Business</Text>
      </TouchableOpacity>

      {/* Modal to show business info */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                {loading ? (
                  <ActivityIndicator size="large" color="#0000ff" />
                ) : businessData ? (
                  <>
                    <Text style={styles.modalTitle}>Business Found:</Text>
                    <Text style={styles.modalText}>Business Name: {businessData.businessName}</Text>
                    <Text style={styles.modalText}>Address: {businessData.address}</Text>
                    <Text style={styles.modalText}>Phone: {businessData.phone}</Text>
                    
                    {/* Add other pre-filled business data as needed */}

                    {/* Confirm Button */}
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => setModalVisible(false)}
                    >
                      <Text style={styles.buttonText}>Confirm</Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    <Text style={styles.modalTitle}>No Business Found</Text>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => setModalVisible(false)}
                    >
                      <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                  </>
                )}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
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
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
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
    backgroundColor: '#2E4C9D', // Blue button background
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default BusinessInfoScreen;




