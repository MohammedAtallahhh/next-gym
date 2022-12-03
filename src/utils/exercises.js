import { fetchData } from "./fetchData";

const exercisesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_EXERCISES_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_YOUTUBE_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

const EXERCISES_URL = "https://exercisedb.p.rapidapi.com";
const YOUTUBE_URL = "https://youtube-search-and-download.p.rapidapi.com/search";

export const getAllExercises = async () => {
  return fetchData(`${EXERCISES_URL}/exercises`, exercisesOptions);
};

export const getExercisesByBodyPart = async (part) => {
  return fetchData(
    `${EXERCISES_URL}/exercises/bodyPart/${part}`,
    exercisesOptions
  );
};

export const getExerciseDetails = async (id) => {
  return fetchData(
    `${EXERCISES_URL}/exercises/exercise/${id}`,
    exercisesOptions
  );
};

export const getExerciseVideos = async (name) => {
  return fetchData(`${YOUTUBE_URL}?query=${name}&sort=r`, youtubeOptions);
};

export const getBodyParts = async () => {
  return fetchData(`${EXERCISES_URL}/exercises/bodyPartList`, exercisesOptions);
};
