import { fetchData } from "./fetchData";

const exercisesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d1df1c68bamsh5bd222c98de54f3p1a9d87jsnf25ac045f001",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f768699bb6msh0c9546aaa3dbf3ep1d9d58jsn1102782e2d97",
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
