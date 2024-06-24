import { useState } from "react";
import "./ColorBox.css";
const randomChoice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
export default function ColorBox({ colors }) {
  const [c, setColor] = useState(randomChoice(colors));
  const changeColor = () => {
    const randomColor = randomChoice(colors);
    setColor(randomColor);
  };
  return (
    <div
      onClick={changeColor}
      className="ColorBox"
      style={{ backgroundColor: c }}
    ></div>
  );
}
