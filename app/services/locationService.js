// app/services/locationService.js

import * as Location from 'expo-location';
import axios from 'axios';

const API_URL = 'https://your-api-url.com/api/resources';

export const getUserLocation = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    throw new Error('Location permission not granted');
  }

  const location = await Location.getCurrentPositionAsync({});
  return location.coords;
};

export const getNearbyResources = async (latitude, longitude, radius = 10) => {
  try {
    const response = await axios.get(`${API_URL}/search`, {
      params: {
        latitude,
        longitude,
        radius,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch nearby resources:', error);
    throw error;
  }
};
