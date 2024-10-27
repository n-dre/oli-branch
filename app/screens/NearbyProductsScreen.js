import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert, FlatList } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

const NearbyProductsScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Request location permission and fetch location
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({});
      setLocation(userLocation.coords);

      // Fetch nearby products after getting location
      fetchNearbyProducts(userLocation.coords);
    })();
  }, []);

  const fetchNearbyProducts = async (coords) => {
    try {
      const { latitude, longitude } = coords;

      // Replace <your-api-url> with your backend endpoint for fetching nearby products
      const response = await axios.get(`<your-api-url>/api/products/nearby`, {
        params: {
          latitude,
          longitude,
          radius: 10,  // 10-mile radius
        },
      });

      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching nearby products:", error);
      Alert.alert("Error", "Could not fetch nearby products.");
    }
  };

  if (errorMsg) {
    return <Text>{errorMsg}</Text>;
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Nearby Products
      </Text>

      {/* Display the products in a list */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.distance} miles away</Text>
          </View>
        )}
      />
    </View>
  );
};

export default NearbyProductsScreen;
