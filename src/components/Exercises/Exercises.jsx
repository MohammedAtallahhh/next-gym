import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import ExerciseCard from "./ExerciseCard";

import { selectBodyPart } from "../../store/bodyPartSlice";

import { getExercisesByBodyPart } from "../../utils/exercises";
import { selectExercises } from "../../store/exercisesSlice";
import ReactPaginate from "react-paginate";

const Exercises = () => {
  const exercises = useSelector(selectExercises);
  const [filteredExercises, setFilteredExercises] = useState(exercises);

  const [currentPage, setCurrentPage] = useState(0);

  const limit = 12;
  const start = currentPage * limit;
  const end = currentPage * limit + limit;

  const bodyPart = useSelector(selectBodyPart);

  useEffect(() => {
    if (bodyPart !== "all") {
      // getExercisesByBodyPart(bodyPart).then((res) => {
      //   setFilteredExercises(res);
      // });
      setFilteredExercises(exercises.filter((e) => e.bodyPart === bodyPart));
    } else {
      setFilteredExercises(exercises);
    }
  }, [bodyPart, exercises]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <section id="exercises" className="py-20">
      <div className="w-[95%] max-w-[1200px] mx-auto">
        {filteredExercises.slice(start, end).map((item, i) => (
          <ExerciseCard key={item.id} data={item} number={start + i + 1} />
        ))}

        <ReactPaginate
          breakLabel="..."
          previousLabel="Prev"
          nextLabel="Next"
          onPageChange={handlePageChange}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={exercises.length / limit}
          renderOnZeroPageCount={null}
          containerClassName="flex justify-center items-center mt-10 w-[90%] overflow-auto no-scrollbar"
          activeLinkClassName="!border-transparent !bg-green-700 !text-white"
          pageLinkClassName="inline-block p-1 px-3 lg:p-2 lg:px-4 text-sm lg:text-base bg-white border border-l-0 border-gray-400"
          breakLinkClassName="inline-block text-gray-600 p-1 px-3 lg:p-2 lg:px-4 text-sm lg:text-base bg-white border border-l-0 border-gray-400"
          nextLinkClassName="inline-block text-gray-600 p-1 px-3 lg:p-2 lg:px-4 text-sm lg:text-base bg-white border border-l-0 border-gray-400"
          previousLinkClassName="inline-block text-gray-600 p-1 px-3 lg:p-2 lg:px-4 text-sm lg:text-base bg-white border border-gray-400"
        />
      </div>
    </section>
  );
};

export default Exercises;
