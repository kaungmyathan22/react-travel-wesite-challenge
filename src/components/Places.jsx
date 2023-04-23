import React from "react";
import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import Maldives3 from '../assets/maldives3.jpg';
import KeyWest from '../assets/keywest.jpg';

const Places = () => {
    const places = [
        {
            name: "Bora Bora",
            img: BoraBora
        },
        {
            name: "Bora Bora 2",
            img: BoraBora2
        },
        {
            name: "Maldives",
            img: Maldives
        },
        {
            name: "Maldives 2",
            img: Maldives2
        },
        {
            name: "Jamaica",
            img: Maldives3
        },
        {
            name: "Key West",
            img: KeyWest
        },
    ]
    return <div className='flex items-center justify-center lg:max-w-6xl w-full px-5 lg:px-0 mx-auto py-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
            {places.map(place => <div key={place.name}>
                <div className='relative h-full w-full'>
                    <img src={place.img} alt="" className='w-full h-full object-cover' />
                    <div className='inset-0 bg-black/40 absolute flex p-5 items-end opacity-0 hover:opacity-100 transition-all duration-500'>
                        <p className='text-white font-bold text-2xl'>{place.name}</p>
                    </div>
                </div>
            </div>)}
        </div>
    </div>;
};

export default Places;
