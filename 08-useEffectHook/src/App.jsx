import React, { useEffect, useEffectEvent, useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  // UseEffect Syntax --->
  useEffect(() => {
    console.log("Learning UseEffect");
  }, [number])
  

  return (
    <>
      
       <div className="ml-1 text-4xl p-3">{count}</div>
       <div className="ml-1 text-4xl p-3">{number}</div>
      <button 
      className="border border-black rounded py-1 px-2 " 
      onClick={() => {setCount(count + 1)}}>Increment</button>
      <button 
      className="border border-black rounded py-1 px-2 " 
      onClick={() => {setNumber(number - 1)}}>Decrement</button>
    </>
  );
};

export default App;
