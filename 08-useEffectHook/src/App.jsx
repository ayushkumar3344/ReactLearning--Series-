import React, { useEffect, useEffectEvent, useState } from "react";

// Advanced usecases of useEffect --->

const App = () => {

  const [count, setCount] = useState(0)
  
  useEffect(() => {
    console.log("count value", count);
  }, [count])

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold">UseEffect Hook</h1>
        <p className="text-2xl border border-white py-2 px-4 m-5">count : {count}</p>
        <button
        onClick={() => {
          setCount(count + 1);
        }}
        className=" rounded px-2 py-1 bg-gray-600 cursor-pointer active:scale-50"
        >Increment</button>
      </div>
    </>
  )
};

export default App;
