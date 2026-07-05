import React, { useState } from 'react'

const App = () => { 

  const [count, setCount] = useState(0);

  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center'>
        <h1 className='text-4xl'>The Count is : {count}</h1>
        <button
        className='m-10 rounded px-4 py-2 cursor-pointer bg-gray-800'
        onClick={() => {setCount(count + 1)}}
        >Update Count : {count}</button>
      </div>
    </>
  )
}

export default App
