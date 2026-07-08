import React, { useEffect, useEffectEvent, useState } from "react";

// Advanced usecases of useEffect --->

const App = () => {

  const [date, setDate] = useState(0);

  useEffect(() => {
    setInterval(() => {
      const updateDate = new Date();
      setDate(updateDate.toLocaleTimeString())
    }, 1000);
  }, [])

  return (
    <>
      <div className="h-screen flex flex-col gap-y-2 items-center justify-center">
        <h1 className="text-3xl font-extrabold">Date : <span className="text-green-500 shadow-2xl">{date}</span></h1>
        <button className="border border-white px-4 py-1">Click</button>
      </div>
    </>
  )
};

export default App;
