import React from 'react'
import InstaImg from './InstaImg';
import Img1 from "../images/Img1.avif"
import Img2 from "../images/Img2.avif"
import Img3 from "../images/Img3.avif"
import Img4 from "../images/Img4.avif"
import Img5 from "../images/Img5.avif"
import Img6 from "../images/Img6.avif"

const Insta = () => {
    return (
        <div className='max-w-[1240px] mx-auto p-4'>
            <p className='font-bold text-2xl'>Follow me On Instagram</p>
            <p className='pb-4 '>@Sahra</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2'>
                <InstaImg image={Img1}/>
                <InstaImg image={Img2}/>
                <InstaImg image={Img3}/>
                <InstaImg image={Img4}/>
                <InstaImg image={Img5}/>
                <InstaImg image={Img6}/>
            </div>
        </div>
    )
}

export default Insta