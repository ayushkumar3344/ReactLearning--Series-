import React from 'react'
import { useState } from 'react';

const App = () => {

  const [name, setName] = useState("");

  return (
    
    <div className='flex items-center justify-center min-h-screen bg-slate-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-96'>
        <input 
        type="text" 
        placeholder='Enter your name_'
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
        className='w-full border p-3 rounded outline-none focus:ring-2 focus:ring-blue-500'
        />
        <h1 className='mt-5 text-xl font-semibold'>Hello, {name || "Guest"}👋</h1>
      </div>
    </div>

  )
}

export default App