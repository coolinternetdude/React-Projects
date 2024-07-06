import { useState, useEffect } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(function myEffect() {
    console.log("MY EFFECT WAS CALLED!");
  }, []);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleChange = (evt) => {
    setName(evt.target.value);
  };

  return (
    <div>
      <h2>Count is : {count}</h2>
      <button onClick={increment}>+</button>
      <p>Name: {name} </p>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
}
