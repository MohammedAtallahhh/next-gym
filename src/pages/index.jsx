import { useEffect } from "react";
import Head from "next/head";

import { useSelector, useDispatch } from "react-redux";

import { Exercises, Hero } from "../components";
import { fetchExercises, selectExercisesStatus } from "../store/exercisesSlice";

export default function Home() {
  const status = useSelector(selectExercisesStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchExercises());
    }
  }, [status, dispatch]);

  return (
    <>
      <Head>
        <title>Wen Gym</title>
      </Head>

      <Hero />
      <Exercises />
    </>
  );
}
