import { createSlice } from '@reduxjs/toolkit';

initialCartState = {
  totalQuantity: null
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem() {},

    removeItem() {}
  }
});

export default cartSlice;