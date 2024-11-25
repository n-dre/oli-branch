import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';

const BankingProductsScreen = ({ navigation }) => {
  // User preferences and goals
  const [businessGoal, setBusinessGoal] = useState('Expand Operations'); // Example of business goal
  const [preferences, setPreferences] = useState({
    checking: true,
    loans: false,
    merchantServices: true,
    investmentAccounts: false,
    insurance: true,
  }); // Example preferences

  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products based on user goals and preferences
  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get('/api/products/recommended', {
          params: {
            businessGoal,
            preferences,
          },
        });
        setRecommendedProducts(response.data);
      } catch (error) {
        console.error('Error fetching recommended products:', error);
      }
    };

    const fetchAllProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setAllProducts(response.data);
      } catch (error) {
        console.error('Error fetching all products:', error);
      }
    };

    fetchRecommendations();
    fetchAllProducts();
    setLoading(false);
  }, [businessGoal, preferences]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Banking Products</Text>
        <Text style={styles.subtitle}>Explore a variety of financial products tailored to your business needs.</Text>

        {/* Recommended Products */}
        <Text style={styles.sectionTitle}>Recommended for You</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#2E4C9D" />
        ) : recommendedProducts.length > 0 ? (
          <FlatList
            data={recommendedProducts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.productCard}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text>{item.description}</Text>
              </View>
            )}
          />
        ) : (
          <Text style={styles.noRecommendationsText}>No recommendations available based on your preferences.</Text>
        )}

        {/* All Products */}
        <Text style={styles.sectionTitle}>All Banking Products</Text>
        {allProducts.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={styles.card}
            onPress={() => navigation.navigate('ProductDetailScreen', { productId: product.id })}
          >
            <Text style={styles.cardTitle}>{product.title}</Text>
            <Text style={styles.cardDescription}>{product.description}</Text>
          </TouchableOpacity>
        ))}
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E4C9D',
    marginBottom: 10,
  },
  productCard: {
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  noRecommendationsText: {
    color: '#777',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666666',
  },
});

export default BankingProductsScreen;

