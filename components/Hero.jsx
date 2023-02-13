import React from 'react'

const Hero = ({heading,message}) => {
  return (
    <div className='flex items-center justify-center mb-12 h-screen bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 right-0 left-0 bottom-0 bg-black/70 z-[2]'/>
      <div className='p-5 text-white z-[2] w-[600px] text-center'>
        <h1 className='text-5xl font-bold'>{heading}</h1>
        <p className='py-5 text-xl'>{message}</p>
        <button className='px-8 py-2 border hover:bg-yellow-400'>Get more info</button>
      </div>
    </div>
  )
}

export default Hero