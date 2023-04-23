import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import beachVid from '../assets/beachVid.mp4';

const Hero = () => {
    return <div className='w-full h-screen relative'>
        <video className='w-full h-full object-cover'
            autoPlay
            loop
            muted
            src={beachVid} />
        <div className="absolute inset-0 bg-black/40">
            <div className='flex flex-col w-full h-full text-white items-center justify-center gap-5'>
                <h1 className='text-4xl'>
                    First Class Travel
                </h1>
                <h1 className='text-4xl'>
                    Top 1% Locations Worldwide
                </h1>
                <div className='bg-white flex py-2 px-2 rounded lg:w-3/5 w-4/5'>
                    <input
                        className='text-black flex-1'
                        type='text'
                        placeholder='Search Destinations'
                    />
                    <button>
                        <AiOutlineSearch size={20} className='icon' style={{ color: '#ffffff' }} />
                    </button>
                </div>
            </div>
        </div>
    </div>;
};

export default Hero;
