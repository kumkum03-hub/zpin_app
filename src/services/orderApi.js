import apiClient from './apiClient';

export const orderApi = {
  // Customer Orders
  createOrder: (data) => 
    apiClient.post('/orders', data),

  getOrders: (params) => 
    apiClient.get('/orders', { params }),

  getOrderById: (id) => 
    apiClient.get(`/orders/${id}`),

  cancelOrder: (id, data) => 
    apiClient.post(`/orders/${id}/cancel`, data),

  trackOrder: (id) => 
    apiClient.get(`/orders/${id}/track`),

  rateOrder: (id, data) => 
    apiClient.post(`/orders/${id}/rate`, data),

  // Seller Orders
  getSellerOrders: (params) => 
    apiClient.get('/seller/orders', { params }),

  getSellerOrderById: (id) => 
    apiClient.get(`/seller/orders/${id}`),

  updateOrderStatus: (id, data) => 
    apiClient.put(`/seller/orders/${id}/status`, data),

  acceptOrder: (id) => 
    apiClient.post(`/seller/orders/${id}/accept`),

  rejectOrder: (id, data) => 
    apiClient.post(`/seller/orders/${id}/reject`, data),
};
