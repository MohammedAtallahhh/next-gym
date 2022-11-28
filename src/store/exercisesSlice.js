import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllExercises } from "../utils/exercises";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchExercises = createAsyncThunk(
  "exercises/getAll",
  getAllExercises
);

const exercisesSlice = createSlice({
  name: "exercises",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchExercises.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(fetchExercises.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });

    builder.addCase(fetchExercises.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const selectExercises = (state) => state.exercises.data;
export const selectExercisesStatus = (state) => state.exercises.status;
export const selectExercisesError = (state) => state.exercises.error;

export default exercisesSlice.reducer;
