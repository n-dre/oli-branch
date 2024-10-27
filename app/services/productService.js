// app/services/productService.js

import axios from 'axios';

const API_URL = 'https://your-api-url.com/api/products';

export const getRecommendedProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/recommended`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch recommended products:', error);
    throw error;
  }
};
