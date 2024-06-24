import { useState } from "react";

export default function Counter() {
  console.log("COMPONENT RE-REDERED");
  const [count, setCount] = useState(0);
  const addOne = () => setCount(count + 1);
  const addNothing = () => setCount(count);
  const addThree = () => {
    // update function doesn't rerender the component like setState(val)
    // so it waits and adds up these callbacks until the state is changed
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
    console.log(count);
  };
  return (
    <div>
      <p>Count is: {count}</p>
      <button onClick={addOne}>+1</button>
      <button onClick={addNothing}>+0</button>
      <button onClick={addThree}>+3</button>
    </div>
  );
}
