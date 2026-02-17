import apiClient from './apiClient';

export const paymentApi = {
  createPaymentIntent: (data) => 
    apiClient.post('/payments/intent', data),

  verifyPayment: (data) => 
    apiClient.post('/payments/verify', data),

  getPaymentMethods: () => 
    apiClient.get('/payments/methods'),

  addPaymentMethod: (data) => 
    apiClient.post('/payments/methods', data),

  deletePaymentMethod: (id) => 
    apiClient.delete(`/payments/methods/${id}`),

  getTransactionHistory: (params) => 
    apiClient.get('/payments/transactions', { params }),
};
