import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import ExerciseCard from "./ExerciseCard";

import { selectBodyPart } from "../../store/bodyPartSlice";

import { selectExercises } from "../../store/exercisesSlice";
import ReactPaginate from "react-paginate";
import Parts from "./Parts";

const Exercises = () => {
  const exercises = useSelector(selectExercises);
  const [filteredExercises, setFilteredExercises] = useState(exercises);

  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);

  const limit = 12;
  const start = currentPage * limit;
  const end = currentPage * limit + limit;

  const bodyPart = useSelector(selectBodyPart);

  useEffect(() => {
    setLoading(true);
    if (bodyPart !== "all") {
      // getExercisesByBodyPart(bodyPart).then((res) => {
      //   setFilteredExercises(res);
      // });
      setFilteredExercises(exercises.filter((e) => e.bodyPart === bodyPart));
    } else {
      setFilteredExercises(exercises);
    }

    setLoading(false);
    setCurrentPage(0);
  }, [bodyPart, exercises]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <section id="exercises" className="py-20">
      <div className="w-[95%] max-w-[1200px] mx-auto">
        <h2 className="mb-10 text-5xl md:text-6xl max-w-[24ch] mx-auto font-bold md:text-center text-blue-900/80">
          What hurts today makes you stronger tomorrow.
        </h2>

        {/* Body parts */}
        <Parts />

        {loading ? (
          "Loading..."
        ) : (
          <div className="grid grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredExercises.slice(start, end).map((item, i) => (
              <ExerciseCard key={item.id} data={item} number={start + i + 1} />
            ))}
          </div>
        )}

        {filteredExercises.length > limit ? (
          <ReactPaginate
            forcePage={currentPage}
            breakLabel="..."
            previousLabel="Prev"
            nextLabel="Next"
            onPageChange={handlePageChange}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={filteredExercises.length / limit}
            renderOnZeroPageCount={null}
            containerClassName="flex flex-wrap gap-y-2 justify-center items-center mt-16 w-[90%] overflow-auto no-scrollbar"
            activeLinkClassName="!border-transparent !bg-blue-700 !text-white"
            pageLinkClassName="inline-block p-3 px-5 text-lg text-blue-900 font-medium bg-white border border-l-0 border-blue-700/50 hover:bg-blue-100 transition-colors"
            breakLinkClassName="inline-block text-gray-600 p-3 px-5 text-lg text-blue-900 font-medium bg-white border border-l-0 border-blue-700/50 hover:bg-blue-100 transition-colors"
            nextLinkClassName="inline-block text-gray-600 p-3 px-5 text-lg text-blue-900 font-medium bg-white border border-l-0 border-blue-700/50 hover:bg-blue-100 transition-colors"
            previousLinkClassName="inline-block text-gray-600 p-3 px-5 text-lg text-blue-900 font-medium bg-white border border-blue-700/50 hover:bg-blue-100 transition-colors"
          />
        ) : null}
      </div>
    </section>
  );
};

export default Exercises;
