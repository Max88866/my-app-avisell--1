import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./cart/reducer";
import ticketReduser from "./ticket/reducer";
import cartReduser from "./cart/reducer";

export const store = configureStore({
  reducer: {
    ticket: ticketReduser,
    curt: cartReduser,
  },
});
