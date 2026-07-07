import React, { useEffect, useEffectEvent, useState } from "react";

// Advanced usecases of useEffect --->

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [debounceTerm, setDebounceTerm] = useState("");

  useEffect(() => {
    // Api Call -->
    const timeout = setTimeout(() => {
      setDebounceTerm(searchTerm);
    }, 500)
    return () => clearInterval(timeout);
  }, [searchTerm])

  return (
    <>
      <input 
      type="text"
      value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
      className="border border-black rounded px-3 py-1 m-25"
      />
      <h1>hey : {debounceTerm}</h1>
    </>
  );

};

export default App;
