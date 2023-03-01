import "./UseState.css";
import { useState } from "react";

// var count = 0;
const UseState = () => {
  console.log(useState("light"));
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);
  return (
    <div className={theme}>
      <h1>UseState Component</h1>
      <h1>count: {count}</h1>
      <button
        onClick={() => {
          return setTheme("dark");
        }}
      >
        Dark
      </button>
      <button
        onClick={() => {
          return setTheme("light");
        }}
      >
        Light
      </button>
      {/* <button
        onClick={() => {
          return setCount(count++);
        }}
      >
        Increment
      </button> */}
      <button
        onClick={() => {
          return setCount(count + 1);
          //
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          return setCount((prevCount) => prevCount - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default UseState;
