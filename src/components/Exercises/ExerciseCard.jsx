import React from "react";

const ExerciseCard = ({ data, number }) => {
  const { id, name, target, equipment, bodyPart, gifUrl } = data;
  return (
    <div>
      <p>{number}</p>
      {bodyPart}
    </div>
  );
};

export default ExerciseCard;
