import axios from 'axios';

// Set the base URL for your JSON Server
const API_URL = 'http://localhost:3000/images';

// Save Image (POST)
export const saveImageAPI = async (imageData) => {
  try {
    const response = await axios.post(API_URL, imageData);  // POST request to save image
    return response.data;
  } catch (error) {
    console.error('Error saving image:', error);
    throw new Error(error.response ? error.response.data : 'An error occurred');
  }
};

// Update Image (PUT)
export const updateImageAPI = async (id, imageData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, imageData); // PUT request to update image by ID
    return response.data;
  } catch (error) {
    console.error('Error updating image:', error);
    throw new Error(error.response ? error.response.data : 'An error occurred');
  }
};

// Delete Image (DELETE)
export const deleteImageAPI = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`); // DELETE request to delete image by ID
    return response.data;
  } catch (error) {
    console.error('Error deleting image:', error);
    throw new Error(error.response ? error.response.data : 'An error occurred');
  }
};

// Get All Images (GET)
export const getImagesAPI = async () => {
  try {
    const response = await axios.get(API_URL); // GET request to fetch all images
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw new Error(error.response ? error.response.data : 'An error occurred');
  }
};
