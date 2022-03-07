import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemInCart: [],
    nagal: false,
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
  },
});

export const { setItemInCart, deleteItemFromCart, setnagal } =
  cartSlice.actions;
export default cartSlice.reducer;
