// services/api.js

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Set your base URL for the API here
const API_BASE_URL = 'https://your-backend-url.com/api';

// Create an axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add Authorization header with token
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('authToken'); // Adjust as per your token storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const authService = {
  login: async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      await AsyncStorage.setItem('authToken', response.data.token); // Store token locally
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },

  register: async (username, email, password) => {
    try {
      const response = await api.post('/auth/register', { username, email, password });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },

  resetPassword: async (email) => {
    try {
      const response = await api.post('/auth/reset-password', { email });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },
};

export const productService = {
  getRecommendedProducts: async () => {
    try {
      const response = await api.get('/products/recommended');
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },

  searchLocalResources: async (keyword) => {
    try {
      const response = await api.get(`/resources/search?keyword=${keyword}`);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },
};

export const educationalService = {
  getEducationalVideos: async () => {
    try {
      const response = await api.get('/education/videos');
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },
};

export default api;
