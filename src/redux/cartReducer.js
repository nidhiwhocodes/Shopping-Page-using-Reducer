
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    isVisible: false,
    items: [],
  },

  reducers: {
    toggleCart(state) {
      state.isVisible = !state.isVisible;
    },

    addToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
        });
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;

      state.items = state.items.filter(
        (item) => item.id !== id
      );
    },

    increaseQuantity(state, action) {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity(state, action) {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity -= 1;
      }

      // Remove items whose quantity reaches zero
      state.items = state.items.filter(
        (item) => item.quantity > 0
      );
    },
  },
});

export const {
  toggleCart,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

