import apiClient from './apiClient';

export const productApi = {
  getProducts: (params) => 
    apiClient.get('/products', { params }),

  getProductById: (id) => 
    apiClient.get(`/products/${id}`),

  searchProducts: (params) => 
    apiClient.get('/products/search', { params }),

  getProductsByCategory: (categoryId, params) => 
    apiClient.get(`/products/category/${categoryId}`, { params }),

  getProductsBySeller: (sellerId, params) => 
    apiClient.get(`/products/seller/${sellerId}`, { params }),

  // Seller Product Management
  createProduct: (data) => 
    apiClient.post('/seller/products', data),

  updateProduct: (id, data) => 
    apiClient.put(`/seller/products/${id}`, data),

  deleteProduct: (id) => 
    apiClient.delete(`/seller/products/${id}`),

  updateProductStock: (id, data) => 
    apiClient.patch(`/seller/products/${id}/stock`, data),

  uploadProductImages: (id, formData) => 
    apiClient.post(`/seller/products/${id}/images`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }),
};
