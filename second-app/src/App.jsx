import React, { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);

  return <>
    <h1>React App</h1>
    <h2>Count: {count}</h2>
    <button onClick={() => setCount(prev => prev + 1)}>increment</button>
    <button onClick={() => setCount(prev => prev - 1)}>decrement</button>
    </>
}