import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  let timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = window.setInterval(() => {
      setCount((prev) => prev + 1)
    },1000)
  }

  const stopTimer = () => {
    if(timerRef.current){
      clearInterval(timerRef.current);
    }
  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">

        <p className="text-3xl font-extrabold">Timer : {count} second's</p>

        <div className="flex gap-x-2">

          <button 
          onClick={startTimer}
          className="border border-white rounded px-4 py-2 mt-5 bg-gray-800 active:scale-50 cursor-pointer">
            Start
          </button>

          <button 
          onClick={stopTimer}
          className="border border-white rounded px-4 py-2 mt-5 bg-gray-800 active:scale-50 cursor-pointer">
            Stop
          </button>

        </div>

      </div>
    </>
  );
};

export default App;
