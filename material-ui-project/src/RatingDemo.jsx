import Rating from "@mui/material/Rating";
import { useState } from "react";

export default function RatingDemo() {
  const [score, setScore] = useState(3);
  return (
    <div>
      <h1>Rating Demo</h1>
      <h3>Current Score : {score}</h3>
      <Rating
        name="simple-controlled"
        value={score}
        onChange={(event, newScore) => {
          setScore(newScore);
        }}
      />
    </div>
  );
}
