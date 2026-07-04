import React from 'react'

const Card = (props) => {
  return (
    <div className='w-[40vw] m-20 p-5 rounded shadow-2xl'>
        <img src={props.imageURL} alt="CardImage" className='overflow-hidden rounded mb-5' />
        <h2 className='text-4xl font-extrabold text-green-600'>{props.title}</h2>
        <p className='text-gray-500'>{props.description}</p>
    </div>
  )
}

export default Card
