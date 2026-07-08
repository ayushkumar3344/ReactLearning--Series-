import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0);
  const prevCount = useRef();
  
  useEffect(() => {
    prevCount.current = count;
  }, [count])

  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center'>
        
        <h1 className='text-4xl font-extrabold'>Count : {count}</h1>
        <h1 className='text-4xl font-extrabold'>Previous Count : {prevCount.current}</h1>

        <button 
        onClick={() => {setCount(count + 1)}}
        className='border border-white px-3 py-2 mt-5 rounded cursor-pointer hover:bg-white hover:text-black'
        >Increment</button>

      </div>
    </>
  )

}

export default App
