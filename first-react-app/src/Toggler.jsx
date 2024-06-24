import { useState } from "react";
import "./Toggler.css";

export default function Toggler() {
  const [isHappy, setIsHappy] = useState(true);
  const [count, setCount] = useState(0);
  const toggleIsHappy = () => {
    setIsHappy(!isHappy);
    setCount(count + 1);
  };
  return (
    <div>
      <p onClick={toggleIsHappy} className="Toggler">
        {isHappy ? "😊" : "😒"}
      </p>
      <p>Count is: {count}</p>
    </div>
  );
}
