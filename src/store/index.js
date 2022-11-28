import { configureStore } from "@reduxjs/toolkit";
import bodyPartReducer from "./bodyPartSlice";
import exercisesReducer from "./exercisesSlice";

export const store = configureStore({
  reducer: {
    bodyPart: bodyPartReducer,
    exercises: exercisesReducer,
  },
});
