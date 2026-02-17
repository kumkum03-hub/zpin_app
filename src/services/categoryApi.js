import apiClient from './apiClient.js';

export const getRootCategories = async () => {
  try {
    const response = await apiClient.get('/categories/root');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getChildCategories = async (parentId) => {
  try {
    const response = await apiClient.get(`/categories/${parentId}/children`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCategoryTree = async () => {
  try {
    const response = await apiClient.get('/categories/tree');
    return response.data;
  } catch (error) {
    throw error;
  }
};
