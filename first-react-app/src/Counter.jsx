import { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(0);
  console.log("COMPONENT HAS BEEN EXECUTED AGAIN!");
  console.log("Current num state is : ", num);
  const changeNum = () => {
    setNum(num + 1);
    console.log("SET NUM HAS RUN!");
    console.log(`Num: ${num}`);
  };
  return (
    <div>
      <p>The count is : {num}</p>
      <button onClick={changeNum}>Increment</button>
    </div>
  );
}
