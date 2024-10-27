// app/services/authService.js

import axios from 'axios';

const API_URL = 'https://your-api-url.com/api/auth';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export const register = async (userDetails) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userDetails);
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};

export const logout = async () => {
  // Handle logout logic (e.g., clearing tokens)
};
