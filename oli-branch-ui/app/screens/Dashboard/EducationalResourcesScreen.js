import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const EducationalResourcesScreen = () => {
  // Sample data for educational resources
  const resources = [
    {
      id: '1',
      title: 'Financial Planning for Small Businesses',
      description: 'Learn how to effectively manage finances for your business.',
      link: 'https://example.com/financial-planning',
    },
    {
      id: '2',
      title: 'Understanding Business Loans',
      description: 'A guide to various types of loans and how to apply.',
      link: 'https://example.com/business-loans',
    },
    {
      id: '3',
      title: 'Tax Strategies for Entrepreneurs',
      description: 'Discover tax-saving tips and strategies for small business owners.',
      link: 'https://example.com/tax-strategies',
    },
    {
      id: '4',
      title: 'Building Your Digital Presence',
      description: 'Tips on creating a strong online presence for your business.',
      link: 'https://example.com/digital-presence',
    },
    {
      id: '5',
      title: 'Investment Basics for Business Owners',
      description: 'Learn the fundamentals of investing to grow your wealth.',
      link: 'https://example.com/investment-basics',
    },
  ];

  // Function to open external links
  const openResource = (url) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Educational Resources</Text>
        <Text style={styles.subtitle}>
          Discover a range of articles and guides to help improve your financial literacy.
        </Text>

        {/* Resource Cards */}
        {resources.map((resource) => (
          <TouchableOpacity
            key={resource.id}
            style={styles.card}
            onPress={() => openResource(resource.link)}
          >
            <Text style={styles.cardTitle}>{resource.title}</Text>
            <Text style={styles.cardDescription}>{resource.description}</Text>
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

export default EducationalResourcesScreen;
