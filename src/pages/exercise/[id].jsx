/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import ExerciseCard from "../../components/Exercises/ExerciseCard";

import {
  getExerciseDetails,
  getExercisesByBodyPart,
  getExerciseVideos,
} from "../../utils/exercises";

import { IoIosBody } from "react-icons/io";
import { GiMuscleUp } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { ImSpinner9 } from "react-icons/im";

const ExerciseDetails = ({ details, videos, similar }) => {
  const { id, name, equipment, target, bodyPart, gifUrl } = details;

  const router = useRouter();

  const [loading, setLoading] = useState(false);

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

  return (
    <div className="py-20 w-[95%] max-w-[1000px] mx-auto">
      {loading ? (
        <div className="flex items-center justify-center min-h-[62vh]">
          <ImSpinner9 className="text-5xl text-blue-700 animate-spin" />
        </div>
      ) : (
        <>
          <div className="flex flex-col justify-center max-w-[500px] mx-auto md:max-w-[unset] gap-10 mb-10 md:flex-row">
            <div className="flex items-center justify-center flex-shrink-0 border">
              <img src={gifUrl} alt="Exercise visualization" />
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="mb-3 text-4xl font-medium text-gray-900 capitalize">
                {name}
              </h2>
              <p className="text-xl mb-2 text-gray-700 max-w-[45ch]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
                voluptates! Labore eaque assumenda porro voluptas nihil, quia
                iure praesentium impedit vitae commodi laboriosam. Maiores
                molestias, rerum nisi pariatur deserunt expedita unde in
                sapiente, delectus odio culpa sint quaerat blanditiis aliquid!
              </p>

              <div className="flex items-center gap-3">
                <GiMuscleUp
                  color="orange"
                  className="w-12 h-12 p-2 rounded-full bg-orange-500/10"
                />
                <span className="font-medium text-gray-700 capitalize">
                  {target}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <IoIosBody
                  color="green"
                  className="w-12 h-12 p-2 rounded-full bg-green-500/10"
                />
                <span className="font-medium text-gray-700 capitalize">
                  {bodyPart}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CgGym
                  color="violet"
                  className="w-12 h-12 p-2 rounded-full bg-green-500/10"
                />
                <span className="font-medium text-gray-700 capitalize">
                  {equipment}
                </span>
              </div>
            </div>
          </div>

          <div className="my-20">
            <h2 className="mb-10 text-3xl font-medium text-gray-800">
              Watch <span className="text-blue-700 capitalize">{name}</span>{" "}
              exercise videos
            </h2>

            <div className="flex flex-wrap gap-10">
              {videos.slice(0, 3).map((video) => (
                <Link
                  key={video.videoId}
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target="_blank"
                  className="max-w-[400px]"
                >
                  <img src={video.thumbnails[0].url} alt="video thumbnail" />

                  <h2 className="my-1 font-medium text-gray-800">
                    {video.title}
                  </h2>
                  <p className="text-sm text-gray-700">{video.channelName}</p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-10 text-3xl font-medium text-gray-700">
              Similar <span className="text-blue-700">Exercises</span>
            </h3>

            <div className="grid grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {similar
                .filter((i) => i.id !== id)
                .slice(0, 10)
                .map((item, i) => (
                  <ExerciseCard key={item.id} data={item} number={i + 1} />
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export const getServerSideProps = async ({ query: { id } }) => {
  const details = await getExerciseDetails(id);

  const videosData = await getExerciseVideos(details.name);

  const similar = await getExercisesByBodyPart(details.bodyPart);

  return {
    props: {
      details,
      videos: videosData.contents.map((v) => v.video),
      similar,
    },
  };
};

export default ExerciseDetails;
