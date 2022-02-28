import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./cart/reducer";
import ticketReduser from "./ticket/reducer";

export const store = configureStore({
  reducer: {
    ticket: ticketReduser,
  },
});
