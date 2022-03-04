import { createSlice } from "@reduxjs/toolkit";
// @ts-ignore
import avialogo from "../../assets/avialogo.svg";

const ticketSlice = createSlice({
  name: "ticket",
  initialState: {
    currentticket: null,
    sortTickets: [],
  },
  reducers: {
    setCurrentticket: (state, action) => {
      state.currentticket = action.payload;
    },
    setsortTicketsRedux: (state, action) => {
      state.sortTickets = [...action.payload];
    },
  },
});

export const { setCurrentticket, setsortTicketsRedux } = ticketSlice.actions;
export default ticketSlice.reducer;
