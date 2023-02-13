import Image from 'next/image'
import React from 'react'
// grid template rows none - no size is set rows are created if needed
const Portfolio = () => {
    return (
        <div className='max-w-[1240px] py-16 mx-auto text-center'>
            <h1 className='font-bold text-2xl'>Travel Photos</h1>
            <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
                <div className='w-full h-full col-span-2 md:col-span-3 row-span-4 '>
                    <Image
                        src="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                        alt='/'
                        layout='responsive'
                        width="677"
                        height="451"
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src="https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                        alt="/"
                        width="215"
                        height="230"
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src="https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="/"
                        width="215"
                        height="217"
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="/"
                        width="215"
                        height="217"
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src="https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="/"
                        width="215"
                        height="217"
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"
                        alt="/"
                        width="215"
                        height="217"
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"
                        alt="/"
                        width="215"
                        height="217"
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
              
            </div>
        </div>
    )
}

export default Portfolio