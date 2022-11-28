import { createSlice } from "@reduxjs/toolkit";

const initialState = "all";

const bodyPartSlice = createSlice({
  name: "bodyPart",
  initialState,
  reducers: {
    setBodyPart(state, action) {
      return action.payload;
    },
  },
});

export const selectBodyPart = (state) => state.bodyPart;

export const { setBodyPart } = bodyPartSlice.actions;
export default bodyPartSlice.reducer;
