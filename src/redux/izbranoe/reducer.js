import { createSlice } from "@reduxjs/toolkit";

const izbranoeSlice = createSlice({
  name: "izbranoe",
  initialState: {
    itemInIzbranoe: [],
    nagal: false,
  },
  reducers: {
    setItemInIzbranoe: (state, action) => {
      state.itemInIzbranoe.push(action.payload);
    },
    deleteItemFromIzbranoe: (state, action) => {
      state.itemInIzbranoe = state.itemInIzbranoe.filter(
        (item) => item.id !== action.payload
      );
    },
    setnagal: (state, action) => {
      state.nagal = !action.payload;
    },
  },
});

export const { setItemInIzbranoe, deleteItemFromIzbranoe, setnagal } =
  izbranoeSlice.actions;
export default izbranoeSlice.reducer;
