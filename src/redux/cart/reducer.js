import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemInCart: [],
  },
  reducers: {
    setItemInCart: (state, action) => {
      state.itemInCart.push(action.payload);
    },
    deleteItemFromCart: (state, action) => {
      state.itemInCart = state.itemInCart.filter(
        (game) => game.id !== action.payload
      );
    },
  },
});

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
