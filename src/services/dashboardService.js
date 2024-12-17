import axios from "axios";

const API_BASE_URL = "https://localhost:5004/api/dashboard"; 

// Fetch all dashboard data
export const getAllDashboardData = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    console.log(response.data); // Log to check the API response
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with a status code outside the range of 2xx
      console.error('Response error:', error.response);
    } else if (error.request) {
      // Request was made, but no response was received
      console.error('Request error:', error.request);
    } else {
      // Something else went wrong
      console.error('Error:', error.message);
    }
  }
};

// Fetch a single dashboard data by ID
export const getDashboardDataById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};

// Create a new dashboard data entry
export const createDashboardData = async (data) => {
  const response = await axios.post(API_BASE_URL, data);
  return response.data;
};

// Update a dashboard data entry by ID
export const updateDashboardData = async (id, data) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, data);
  return response.data;
};

// Delete a dashboard data entry by ID
export const deleteDashboardData = async (id) => {
  await axios.delete(`${API_BASE_URL}/${id}`);
};
