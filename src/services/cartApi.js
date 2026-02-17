import apiClient from './apiClient';

export const cartApi = {
  getCart: () => 
    apiClient.get('/cart'),

  addToCart: (data) => 
    apiClient.post('/cart', data),

  updateCartItem: (itemId, data) => 
    apiClient.put(`/cart/${itemId}`, data),

  removeFromCart: (itemId) => 
    apiClient.delete(`/cart/${itemId}`),

  clearCart: () => 
    apiClient.delete('/cart'),

  applyCoupon: (data) => 
    apiClient.post('/cart/coupon', data),

  removeCoupon: () => 
    apiClient.delete('/cart/coupon'),
};
