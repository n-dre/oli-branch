import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const GovernmentResourcesScreen = () => {
  // Sample data for government resources
  const resources = [
    {
      id: '1',
      title: 'Small Business Grants',
      description: 'Explore available grants for small businesses.',
      link: 'https://www.sba.gov/funding-programs/grants',
    },
    {
      id: '2',
      title: 'SBA Loan Programs',
      description: 'Find loan programs provided by the Small Business Administration.',
      link: 'https://www.sba.gov/funding-programs/loans',
    },
    {
      id: '3',
      title: 'Business Tax Incentives',
      description: 'Learn about tax incentives for small businesses.',
      link: 'https://www.irs.gov/businesses/small-businesses-self-employed/tax-information-for-businesses',
    },
    {
      id: '4',
      title: 'COVID-19 Relief Resources',
      description: 'Access relief resources for businesses affected by COVID-19.',
      link: 'https://www.sba.gov/funding-programs/loans/covid-19-relief-options',
    },
    {
      id: '5',
      title: 'Minority Business Development Agency',
      description: 'Support and funding resources for minority-owned businesses.',
      link: 'https://www.mbda.gov/',
    },
  ];

  // Function to open external links
  const openResource = (url) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Government Resources</Text>
        <Text style={styles.subtitle}>
          Access government programs and support tailored to small businesses.
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

export default GovernmentResourcesScreen;
