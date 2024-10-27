import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* App Title */}
        <Text style={styles.title}>About Oli-Branch</Text>

        {/* Purpose Section */}
        <Text style={styles.sectionTitle}>Our Purpose</Text>
        <Text style={styles.sectionText}>
          Oli-Branch is a one-stop fintech platform designed to empower small businesses and individuals by providing comprehensive financial tools and services. 
          Our mission is to break down financial barriers and foster economic growth through innovative technology.
        </Text>

        {/* Mission Section */}
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.sectionText}>
          We aim to empower small businesses and individuals by delivering personalized financial recommendations, detailed product comparisons, 
          and access to valuable local and government resources. Through AI and machine learning, we enable users to make informed decisions, optimize 
          their financial health, and achieve their business goals.
        </Text>

        {/* Vision Section */}
        <Text style={styles.sectionTitle}>Our Vision</Text>
        <Text style={styles.sectionText}>
          At Oli-Branch, we envision a future where every user, regardless of financial background, can confidently navigate their financial journey. 
          We strive to create an inclusive world where economic growth and stability are within everyone’s reach.
        </Text>

        {/* App Structure Overview */}
        <Text style={styles.sectionTitle}>App Structure</Text>
        <Text style={styles.sectionText}>
          Oli-Branch is organized into multiple key areas, including:
          {"\n"}- Financial Health Metrics{"\n"}- Banking Products{"\n"}- Government Resources{"\n"}- Educational Resources{"\n"}
          - Community Chat and Support{"\n"}Each area of the app is designed to offer a specific type of support, from improving personal financial health to 
          accessing resources tailored to small business needs.
        </Text>

        {/* Back-End Info */}
        <Text style={styles.sectionTitle}>Our Technology</Text>
        <Text style={styles.sectionText}>
          The app is powered by a Node.js and Express back-end server, integrated with MongoDB for data storage and secure authentication. Our AI/ML services provide 
          financial insights and recommendations, aiming to enhance user experience and assist with sound financial decision-making.
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
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

export default AboutScreen;
