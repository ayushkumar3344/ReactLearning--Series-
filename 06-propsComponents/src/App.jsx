import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Card from './component/Card'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Card imageURL="https://img.magnific.com/free-photo/computer-program-coding-screen_53876-138060.jpg?semt=ais_hybrid&w=740&q=80" title="Card 1" description="Hey my self Card 1" />
        <Card imageURL="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg" title="Card 2" description="Hey mujhe America Jana Hai" />
        <Card imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUYbnQssYlI5SVMn-mgQKuRc8lURJi7N-6xIj9VQgIr82YiIEl4LijYY&s=10" title="Card 3" description="Mein AAJ khana khane ke liye bahut khush hun yarr" />
      </div>
      <Footer />
    </>
  )
}

export default App