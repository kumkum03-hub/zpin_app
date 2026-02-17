import apiClient from './apiClient';

export const sellerApi = {
  // Profile
  getProfile: () => 
    apiClient.get('/seller/profile'),

  updateProfile: (data) => 
    apiClient.put('/seller/profile', data),

  uploadShopImage: (formData) => 
    apiClient.post('/seller/profile/shop-image', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }),

  // Analytics
  getDashboard: () => 
    apiClient.get('/seller/dashboard'),

  getAnalytics: (params) => 
    apiClient.get('/seller/analytics', { params }),

  // Inventory
  getInventory: (params) => 
    apiClient.get('/seller/inventory', { params }),

  updateInventory: (productId, data) => 
    apiClient.patch(`/seller/inventory/${productId}`, data),

  // Earnings
  getEarnings: (params) => 
    apiClient.get('/seller/earnings', { params }),

  getPayouts: (params) => 
    apiClient.get('/seller/payouts', { params }),

  requestPayout: (data) => 
    apiClient.post('/seller/payouts/request', data),
};
