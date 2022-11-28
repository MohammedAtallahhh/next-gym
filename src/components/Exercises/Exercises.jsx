import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import ExerciseCard from "./ExerciseCard";

import { selectBodyPart } from "../../store/bodyPartSlice";

import { getExercisesByBodyPart } from "../../utils/exercises";
import { selectExercises } from "../../store/exercisesSlice";

const Exercises = () => {
  const exercises = useSelector(selectExercises);
  const [filteredExercises, setFilteredExercises] = useState(exercises);

  const bodyPart = useSelector(selectBodyPart);

  const limit = 9;

  useEffect(() => {
    if (bodyPart !== "all") {
      getExercisesByBodyPart(bodyPart).then((res) => {
        setFilteredExercises(res);
      });
    }
  }, [bodyPart]);

  return (
    <div className="py-10">
      <div className="w-[95%] max-w-[1200px] mx-auto">
        {filteredExercises.slice(0, limit).map((item) => (
          <ExerciseCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Exercises;
