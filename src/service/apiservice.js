import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
});

export const setAuthToken = (token) => {
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    apiClient.defaults.headers.common['Content-Type'] = 'application/json';
    console.log('Token set:', token); // Debugging line
  } else {
    delete apiClient.defaults.headers.common['Authorization'];
  }
};

// API calls
export const fetchData = async () => {
  console.log('Headers before request:', apiClient.defaults.headers.common); // Debugging line
  return await apiClient.get('/api/daily_updates/staticdata');
};

export const postData = async (data) => {
  return await apiClient.post('/data', data);
};

export const updateData = async (id, data) => {
  return await apiClient.put(`/data/${id}`, data);
};

export const deleteData = async (id) => {
  return await apiClient.delete(`/data/${id}`);
};

// Example usage
// (async () => {
//   const token = 'your-token-here'; // Replace with your actual token
//   setAuthToken(token);

//   try {
//     const data = await fetchData();
//     console.log('Data:', data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// })();
