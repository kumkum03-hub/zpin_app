import apiClient from './apiClient';

export const authApi = {
  // Customer Auth
  customerRegister: (data) => 
    apiClient.post('/auth/customer/register', data),

  customerLogin: (data) => 
    apiClient.post('/auth/customer/login', data),

  customerVerifyOtp: (data) => 
    apiClient.post('/auth/customer/verify-otp', data),

  // Seller Auth
  sellerRegister: (data) => 
    apiClient.post('/auth/seller/register', data),

  sellerLogin: (data) => 
    apiClient.post('/auth/seller/login', data),

  sellerVerifyOtp: (data) => 
    apiClient.post('/auth/seller/verify-otp', data),

  // Partner Auth
  partnerRegister: (data) => 
    apiClient.post('/auth/partner/register', data),

  partnerLogin: (data) => 
    apiClient.post('/auth/partner/login', data),

  partnerVerifyOtp: (data) => 
    apiClient.post('/auth/partner/verify-otp', data),

  // Common
  logout: () => 
    apiClient.post('/auth/logout'),

  refreshToken: (data) => 
    apiClient.post('/auth/refresh-token', data),
};
