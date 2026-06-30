import React from 'react'

let name = "Ayush";

const App = () => {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1 className='text-[30px] font-extrabold'>Hello {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque libero saepe harum hic minus non, sapiente ducimus, optio aliquid perspiciatis labore voluptates obcaecati voluptas laborum cumque iste autem. Eos alias corporis ut assumenda voluptatum amet repudiandae consequatur doloremque placeat?</p>
      </div>
    </>
  )
}

export default App