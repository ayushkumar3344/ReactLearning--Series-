import React, { useState } from 'react'

const App = () => {

  const [color, setColor] = useState("Olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed bottom-12 inset-x-0 px-2 flex flex-wrap justify-center'>
        <div className='flex flex-wrap justify-between shadow-xl bg-white px-3 py-2 rounded-full gap-3'>
          <button
          onClick={() => setColor("Red")}
          className='outline-none px-4 py-1 rounded-full font-semibold cursor-pointer text-white shadow-lg' 
          style={{backgroundColor: "Red"}}
          >Red</button>
          <button 
          onClick={() => setColor("Green")}
          className='outline-none px-4 py-1 rounded-full font-semibold cursor-pointer text-white shadow-lg' 
          style={{backgroundColor: "Green"}}
          >Green</button>
          <button 
          onClick={() => setColor("Purple")}
          className='outline-none px-4 py-1 rounded-full font-semibold cursor-pointer text-white shadow-lg' 
          style={{backgroundColor: "Purple"}}
          >Purple</button>
          <button 
          onClick={() => setColor("Orange")}
          className='outline-none px-4 py-1 rounded-full font-semibold cursor-pointer text-white shadow-lg' 
          style={{backgroundColor: "Orange"}}
          >Orange</button>
          <button 
          onClick={() => setColor("Skyblue")}
          className='outline-none px-4 py-1 rounded-full font-semibold cursor-pointer text-white shadow-lg' 
          style={{backgroundColor: "Skyblue"}}
          >Skyblue</button>
          <button 
          onClick={() => setColor("Gray")} 
          className='outline-none px-4 py-1 rounded-full font-semibold cursor-pointer text-white shadow-lg' 
          style={{backgroundColor: "Gray"}}
          >Gray</button>
        </div>
      </div>
    </div>
  )
}

export default App
