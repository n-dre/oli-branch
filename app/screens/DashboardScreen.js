import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const availableScreens = [
  { id: '1', name: 'Financial Health Overview', screen: 'FinancialHealthScreen', icon: require('../assets/Financial-icon.svg') },
  { id: '2', name: 'Banking Product Differentiation', screen: 'BankingProductsScreen', icon: require('../assets/Banking-product.svg') },
  { id: '3', name: 'Local & Government Resources', screen: 'GovernmentResourcesScreen', icon: require('../assets/Local&Government.svg') },
  { id: '4', name: 'Educational Resources', screen: 'EducationalResourcesScreen', icon: require('../assets/Education-Resources.svg') },
];

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [dashboardItems, setDashboardItems] = useState([]);
  const [isCustomizing, setIsCustomizing] = useState(false);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const savedLayout = await AsyncStorage.getItem('dashboardLayout');
      if (savedLayout) {
        setDashboardItems(JSON.parse(savedLayout));
      } else {
        setDashboardItems(availableScreens);
      }
    } catch (error) {
      console.error('Error loading dashboard layout:', error);
    }
  };

  const saveDashboard = async (layout) => {
    try {
      await AsyncStorage.setItem('dashboardLayout', JSON.stringify(layout));
      setDashboardItems(layout);
    } catch (error) {
      console.error('Error saving dashboard layout:', error);
    }
  };

  const toggleCustomization = () => {
    setIsCustomizing(!isCustomizing);
  };

  const renderItem = ({ item, drag, isActive }) => (
    <TouchableOpacity
      style={[styles.card, isActive && styles.activeCard]}
      onLongPress={drag}
      onPress={() => !isCustomizing && navigation.navigate(item.screen)}
    >
      <Image source={item.icon} style={styles.cardIcon} />
      <Text style={styles.cardText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Oli-Branch Dashboard</Text>
        <TouchableOpacity style={styles.customizeButton} onPress={toggleCustomization}>
          <Text style={styles.customizeButtonText}>{isCustomizing ? 'Done' : 'Customize'}</Text>
        </TouchableOpacity>
      </View>

      <DraggableFlatList
        data={dashboardItems}
        onDragEnd={({ data }) => saveDashboard(data)}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <TouchableOpacity style={styles.saveButton} onPress={() => saveDashboard(dashboardItems)}>
        <Text style={styles.saveButtonText}>Save Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E4C9D',
  },
  customizeButton: {
    backgroundColor: '#2E4C9D',
    padding: 10,
    borderRadius: 5,
  },
  customizeButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#2E4C9D',
    borderRadius: 8,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  activeCard: {
    opacity: 0.8,
  },
  cardText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  cardIcon: {
    width: 40,
    height: 40,
  },
  saveButton: {
    backgroundColor: '#2E4C9D',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DashboardScreen;

