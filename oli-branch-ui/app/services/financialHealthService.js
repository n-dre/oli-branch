// app/services/financialHealthService.js

import axios from 'axios';

const API_URL = 'https://your-api-url.com/api/financial-health';

export const getFinancialHealthData = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch financial health data:', error);
    throw error;
  }
};
