import apiClient from './apiClient';

export const partnerApi = {
  // Available Orders
  getAvailableOrders: (params) => 
    apiClient.get('/partner/orders/available', { params }),

  // Partner Orders
  getOrders: (params) => 
    apiClient.get('/partner/orders', { params }),

  getOrderById: (id) => 
    apiClient.get(`/partner/orders/${id}`),

  acceptOrder: (id) => 
    apiClient.post(`/partner/orders/${id}/accept`),

  rejectOrder: (id, data) => 
    apiClient.post(`/partner/orders/${id}/reject`, data),

  updateOrderStatus: (id, data) => 
    apiClient.put(`/partner/orders/${id}/status`, data),

  reportIssue: (id, data) => 
    apiClient.post(`/partner/orders/${id}/issue`, data),

  // Earnings
  getEarnings: (params) => 
    apiClient.get('/partner/earnings', { params }),

  getEarningsSummary: () => 
    apiClient.get('/partner/earnings/summary'),

  // Navigation
  getRoute: (id) => 
    apiClient.get(`/partner/orders/${id}/route`),

  getNavigationLinks: (id) => 
    apiClient.get(`/partner/orders/${id}/navigation-links`),

  // Documents
  getDocuments: () => 
    apiClient.get('/partner/documents'),

  uploadDocument: (formData) => 
    apiClient.post('/partner/documents', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }),
};
