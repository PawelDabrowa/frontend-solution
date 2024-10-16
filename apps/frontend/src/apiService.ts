import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api/1';

export const getData = async (endpoint: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
    
    if (endpoint === 'fail') {
      throw new Error('Simulated API failure');
    }
  //Return API data
    return response.data;
  } catch (error) {
  //Handle failed API request
    throw new Error('Failed to fetch data from API');
  }
};
