import Box from "./Box";
import "./BoxGrid.css";
import { useState } from "react";
const initiateBoxes = (num) => Array.from({ length: num }).fill(false);
function BoxGrid({ numBoxes = 9 }) {
  const [boxes, setBoxes] = useState(initiateBoxes(numBoxes));

  const toggleIsActive = (index) => {
    setBoxes((prevBoxes) => {
      return prevBoxes.map((box, i) => {
        if (i === index) return (box = !box);
        return box;
      });
    });
  };

  const reset = () => setBoxes(initiateBoxes(numBoxes));

  return (
    <div className="BoxGrid">
      {boxes.map((box, i) => (
        <Box key={i} isActive={box} toggleIsActive={() => toggleIsActive(i)} />
      ))}
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default BoxGrid;
