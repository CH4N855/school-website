import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getStudents = async () => {
  const response = await axios.get(`${API_URL}/students`);
  return response.data;
};

export const addStudent = async (name) => {
const response = await axios.post(`${API_URL}/students`, { name });
return response.data;
};


export const deleteStudent = async (id) => {
await axios.delete(`${API_URL}/students/${id}`);
};