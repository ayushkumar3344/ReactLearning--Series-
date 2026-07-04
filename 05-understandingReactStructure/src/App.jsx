import { useState } from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  
  const [value, setValue] = useState(0);

  return (
    <>
      <div className='m-20'>
        <Navbar logoText="CodeWithAyush" />
        <h1 className='text-4xl font-bold'>{value}</h1>
        <button 
        className='rounded py-1 px-2 bg-orange-500 cursor-pointer text-white'
        onClick={() => setValue(value + 1)}
        >Click Me : {value}</button>
        <Footer />
      </div>
    </>
  )
}

export default App
