import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const inputRef = useRef();

  const [name, setName] = useState("Ayush");

  const handleReset = () => {
    setName("")
    inputRef.current.focus()
  }

  const handleChange = () => {
    inputRef.current.style.color = "yellow";
  }
  

  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center'>
        <input
        ref={inputRef}
        className='border border-white px-3 py-2' 
        placeholder='Type Something...'
        type="text"
        value={name} 
        onChange={(e) => {setName(e.target.value)}}
        />

        <button 
        onClick={handleReset}
        className='border border-white bg-white text-black px-3 py-2 mt-5 rounded cursor-pointer'
        >Reset</button>

        <button 
        onClick={handleChange}
        className='border border-white bg-white text-black px-3 py-2 mt-5 rounded cursor-pointer'
        >Change Input</button>

      </div>
    </>
  )

}

export default App
