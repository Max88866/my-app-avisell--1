import { createSlice } from "@reduxjs/toolkit";

const izbranoeSlice = createSlice({
  name: "izbranoe",
  initialState: {
    itemInIzbranoe: [],
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
  },
});

export const { setItemInIzbranoe, deleteItemFromIzbranoe } =
  izbranoeSlice.actions;
export default izbranoeSlice.reducer;
