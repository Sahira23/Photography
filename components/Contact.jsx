import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 h-screen'>
        <h1 className='text-center text-2xl font-bold p-4'>Let's work together</h1>
        <form action="#" className='max-w-[600px] m-auto'>
            <div className='grid grid-cols-2 gap-2'>
                <input  className='border shadow-lg p-3' type="text" placeholder='Name...'/>
                <input  className='border shadow-lg p-3' type="email" placeholder='Email...'/>
            </div>
            <input  className='border shadow-lg p-3 w-full my-3' type="text" placeholder='Subject...'/>
            <textarea  className='border shadow-lg p-3 w-full' name="message" id="message" cols="30" rows="10" placeholder='Message...'></textarea>
            <button className='shadow-lg border w-full p-3 mt-2 bg-red-800 text-blue-50' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Contact