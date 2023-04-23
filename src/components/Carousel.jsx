import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
    {
        url: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
    },
    {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
    },
    {
        url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return <div className='flex items-center justify-center lg:max-w-6xl w-full px-5 lg:px-0 mx-auto py-10 h-auto lg:min-h-screen mb-10'>
        <div className="relative">
            {currentIndex > 0 && <BsArrowLeftSquareFill onClick={() => setCurrentIndex(prev => prev - 1)} className='absolute text-white text-lg sm:text-3xl top-[50%] -translate-y-[50%] cursor-pointer left-[2%]' />}
            <div className="w-full h-full">
                <img src={sliderData[currentIndex].url} alt="" className='md:w-full md:h-full h-auto w-full object-cover rounded ' />
            </div>
            {currentIndex < sliderData.length - 1 && <BsArrowRightSquareFill onClick={() => setCurrentIndex(prev => prev + 1)} className='absolute text-white text-lg sm:text-3xl top-[50%] -translate-y-[50%] cursor-pointer right-[2%]' />}
        </div>
    </div>;
};

export default Carousel;
