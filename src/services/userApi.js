import apiClient from './apiClient';

export const userApi = {
  // Profile
  getProfile: () => 
    apiClient.get('/user/profile'),

  updateProfile: (data) => 
    apiClient.put('/user/profile', data),

  uploadProfileImage: (formData) => 
    apiClient.post('/user/profile/image', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }),

  // Addresses
  getAddresses: () => 
    apiClient.get('/user/addresses'),

  addAddress: (data) => 
    apiClient.post('/user/addresses', data),

  updateAddress: (id, data) => 
    apiClient.put(`/user/addresses/${id}`, data),

  deleteAddress: (id) => 
    apiClient.delete(`/user/addresses/${id}`),

  setDefaultAddress: (id) => 
    apiClient.patch(`/user/addresses/${id}/default`),

  // Wishlist
  getWishlist: () => 
    apiClient.get('/user/wishlist'),

  addToWishlist: (data) => 
    apiClient.post('/user/wishlist', data),

  removeFromWishlist: (productId) => 
    apiClient.delete(`/user/wishlist/${productId}`),
};
