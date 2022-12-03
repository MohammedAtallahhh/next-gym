import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { useSelector, useDispatch } from "react-redux";

import { Exercises, Hero } from "../components";
import {
  fetchExercises,
  selectExercisesStatus,
  setStatus,
} from "../store/exercisesSlice";

import { ImSpinner9 } from "react-icons/im";

export default function Home() {
  const status = useSelector(selectExercisesStatus);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchExercises());
    }

    () => dispatch(setStatus());
  }, [status, dispatch]);

  return (
    <>
      <Head>
        <title>Wen Gym</title>
      </Head>

      {loading ? (
        <div className="flex items-center justify-center min-h-[82vh]">
          <ImSpinner9 className="text-5xl text-blue-700 animate-spin" />
        </div>
      ) : (
        <>
          <Hero />
          <Exercises />
        </>
      )}
    </>
  );
}
