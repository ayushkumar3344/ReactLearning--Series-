import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const inputRef = useRef();
  const [name, setName] = useState("Ayush");

  const handleReset = () => {
    setName("");
    inputRef.current.focus();
  }

  const handleChange = () => {
    inputRef.current.style.color = "Orange";
  }

  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center'>

        <input 
        ref={inputRef}
        onChange={(e) => {setName(e.target.value)}}
        value={name}
        className='border border-white rounded px-4 py-2'
        placeholder='Type something...'
        type="text" />

        <button 
        onClick={handleReset}
        className='border border-white px-4 py-2 mt-5 rounded bg-gray-800 active:scale-50'>Reset</button>

        <button 
        onClick={handleChange}
        className='border border-white px-4 py-2 mt-5 rounded bg-gray-800 active:scale-50'>Change Color</button>

      </div>
    </>
  )

}

export default App
