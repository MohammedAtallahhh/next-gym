import { fetchData } from "./fetchData";

const exercisesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_EXERCISES_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const BASE_URL = "https://exercisedb.p.rapidapi.com";

export const getAllExercises = async () => {
  return fetchData(`${BASE_URL}/exercises`, exercisesOptions);
};

export const getExercisesByBodyPart = async (part) => {
  return fetchData(`${BASE_URL}/exercises/bodyPart/${part}`, exercisesOptions);
};

export const getBodyParts = async () => {
  return fetchData(`${BASE_URL}/exercises/bodyPartList`, exercisesOptions);
};
