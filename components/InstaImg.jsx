import Image from 'next/image'
import React from 'react';
import { FaInstagram } from "react-icons/fa"

const InstaImg = ({ image }) => {
    return (
        <div className='relative'>
            <Image className='w-full h-full' layout='responsive' src={image} alt='/' />
            {/* Overlay */}
            <div className='flex justify-center items-center absolute left-0 right-0 bottom-0 top-0 hover:bg-black/50 group'>
                <p className='text-gray-300 hidden group-hover:block'><FaInstagram size={30} /></p>
            </div>
        </div>
    )
}

export default InstaImg