import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemInCart: [],
    nagal: false,
    itemInCartInBack: [],
    nagal2: false,
  },
  reducers: {
    setItemInCart: (state, action) => {
      state.itemInCart.push(action.payload);
    },
    deleteItemFromCart: (state, action) => {
      state.itemInCart = state.itemInCart.filter(
        (item) => item.id !== action.payload
      );
    },
    setnagal: (state, action) => {
      state.nagal = !action.payload;
    },
    setItemInCartMassiv: (state, action) => {
      state.itemInCartInBack = [...state.itemInCartInBack, ...action.payload];
    },
    setnagal2: (state, action) => {
      state.nagal2 = !action.payload;
    },
  },
});

export const {
  setItemInCart,
  deleteItemFromCart,
  setnagal,
  setItemInCartMassiv,
  setnagal2,
} = cartSlice.actions;
export default cartSlice.reducer;
