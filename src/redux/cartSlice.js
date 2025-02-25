import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
  orders: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemIndex = state.products.findIndex((item) => item.id === newItem.id);

      if (itemIndex !== -1) {
        state.products[itemIndex].quantity += 1;
        state.products[itemIndex].totalPrice = (
          state.products[itemIndex].quantity * state.products[itemIndex].price
        );
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      }

      state.totalPrice = parseFloat(state.totalPrice) + parseFloat(newItem.price);
      state.totalQuantity += 1;
    },

    removeFromCart(state, action) {
      const itemId = action.payload;
      const findItem = state.products.find((item) => item.id === itemId);

      if (findItem) {
        state.totalPrice -= findItem.totalPrice;
        state.totalQuantity -= findItem.quantity;

        state.products = state.products.filter((item) => item.id !== itemId);
      }
    },

    increaseQuantity(state, action) {
      const itemId = action.payload;
      const findItem = state.products.find((item) => item.id === itemId);
      if (findItem) {
        findItem.quantity += 1;
        findItem.totalPrice = findItem.quantity * findItem.price;

        state.totalQuantity += 1;
        state.totalPrice += findItem.price;
      }
    },

    decreaseQuantity(state, action) {
      const itemId = action.payload;
      const findItem = state.products.find((item) => item.id === itemId);

      if (findItem && findItem.quantity > 1) {
        findItem.quantity -= 1;
        findItem.totalPrice = findItem.quantity * findItem.price;

        state.totalQuantity -= 1;
        state.totalPrice -= findItem.price;
      } else {
        state.products = state.products.filter((item) => item.id !== itemId);
      }
    },

    checkout(state) {
      if (state.products.length === 0) return; // Prevent checkout if cart is empty

      const newOrder = {
        id: new Date().getTime(), // Unique order ID
        products: [...state.products],
        totalPrice: state.totalPrice,
        date: new Date().toISOString(),
      };

      state.orders.push(newOrder);
      state.products = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, checkout } = cartSlice.actions;
export default cartSlice.reducer;
