import { createSlice } from "@reduxjs/toolkit";

const ticketSlice = createSlice({
  name: "ticket",
  initialState: {
    currentticket: null,
  },
  reducers: {
    setCurrentticket: (state, action) => {
      state.currentticket = action.payload;
    },
  },
});

export const { setCurrentticket } = ticketSlice.actions;
export default ticketSlice.reducer;
