/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const ExerciseCard = ({ data, number }) => {
  const { id, name, target, equipment, bodyPart, gifUrl } = data;
  return (
    <Link
      href={`/exercise/${id}`}
      className="relative p-4 select-none rounded-xl bg-blue-500/5 hover:bg-blue-500/20 max-w-[400px]"
    >
      {/* Exercise number */}
      <span className="absolute flex items-center justify-center w-8 h-8 p-2 text-sm font-medium text-white bg-blue-500 rounded-full top-2 left-2">
        {number}
      </span>

      <img src={gifUrl} alt="Exercise visualization" />

      <h4 className="w-full my-2 text-sm text-gray-700">{equipment}</h4>

      <span className="inline-block px-2 py-1 mr-2 text-xs font-medium text-blue-700 rounded-full bg-blue-500/20">
        {target}
      </span>
      <span className="inline-block px-2 py-1 text-xs font-medium text-blue-700 rounded-full bg-blue-500/20">
        {bodyPart}
      </span>

      <h2 className="py-3 text-lg font-medium text-gray-900 capitalize">
        {name}
      </h2>
    </Link>
  );
};

export default ExerciseCard;
