import React from "react";

const ExerciseCard = ({ data }) => {
  const { id, name, target, equipment, bodyPart, gifUrl } = data;
  return <h2>{bodyPart}</h2>;
};

export default ExerciseCard;
