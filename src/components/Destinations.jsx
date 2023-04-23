import React from "react";
import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import KeyWest from '../assets/keywest.jpg';

const Destinations = () => {
    return <div className='min-h-screen lg:max-w-6xl w-full px-5 mx-auto flex flex-col items-center justify-center gap-3 lg:px-0'>
        <h1 className='font-bold text-4xl mt-10'>All-Inclusive Resorts</h1>
        <p className='text-lg text-gray-500 mb-5'>On the Caribbean's Best Beaches</p>
        <div className="grid grid-cols-2 lg:grid-cols-5 grid-rows-2 gap-3">
            <img src={BoraBora} className="w-full h-full object-cover col-span-2 lg:col-span-3 row-span-2" alt="" />
            <img src={BoraBora2} className="w-full h-full object-cover" alt="" />
            <img src={Maldives} className="w-full h-full object-cover" alt="" />
            <img src={Maldives2} className="w-full h-full object-cover" alt="" />
            <img src={KeyWest} className="w-full h-full object-cover" alt="" />
        </div>
    </div>;
};

export default Destinations;
