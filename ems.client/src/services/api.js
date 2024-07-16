import axios from 'axios';

const API_URL = 'http://localhost:5235';

export const fetchEvents = async () => {
  const response = await axios.get(`${API_URL}/events`);
  return response.data;
};

export const fetchEventById = async (id) => {
  const response = await axios.get(`${API_URL}/events/${id}`);
  return response.data;
};

export const createEvent = async (event) => {
  const response = await axios.post(`${API_URL}/events`, event);
  return response.data;
};

export const fetchUserProfile = async () => {
  const response = await axios.get(`${API_URL}/users/profile`);
  return response.data;
};

export const fetchBookings = async () => {
  const response = await axios.get(`${API_URL}/bookings`);
  return response.data;
};
