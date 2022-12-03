import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setBodyPart } from "../../store/bodyPartSlice";

import { getBodyParts } from "../../utils/exercises";

const Parts = ({ exercisesElement }) => {
  const [parts, setParts] = useState([]);
  const [active, setActive] = useState("all");

  const dispatch = useDispatch();

  useEffect(() => {
    getBodyParts().then((res) => setParts(res));
  }, []);

  const changePart = (part) => {
    setActive(part);
    dispatch(setBodyPart(part));

    exercisesElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mb-10 max-w-[800px] mx-auto">
      <h3 className="mb-5 text-2xl text-center text-gray-700">
        Explore Exercises by body part.
      </h3>

      <ul className="flex flex-wrap items-center justify-center gap-3">
        <li
          className={`flex items-center justify-center px-6 py-2 font-medium text-blue-500 capitalize transition-colors border border-blue-500 rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white ${
            active === "all" ? "!bg-blue-500 !text-white" : ""
          }`}
          onClick={() => changePart("all")}
        >
          All
        </li>
        {parts.map((part, i) => (
          <li
            key={part + i}
            className={`px-6 py-2 font-medium text-blue-500 capitalize border border-blue-500 rounded-lg cursor-pointer flex justify-center items-center hover:bg-blue-500 hover:text-white transition-colors ${
              active === part ? "!bg-blue-500 !text-white" : ""
            }`}
            onClick={() => changePart(part)}
          >
            {part}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Parts;
