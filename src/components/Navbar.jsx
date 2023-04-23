import React, { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
} from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    function handleNav () {
        setIsOpen(prev => !prev)
    }

    return <div className='absolute inset-x-0 z-10'>
        <div className='flex flex-row items-center justify-between lg:max-w-6xl w-full px-10 lg:px-0 mx-auto py-5'>
            <p className='font-bold text-4xl text-white'>
                BEACHES.
            </p>
            <ul className='text-white md:flex md:flex-row hidden md:items-center'>
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>View</li>
                <li>Book</li>
                <li className='hidden md:flex'>
                    <BiSearch className='' size={20} />
                </li>
                <li className='hidden md:flex'>
                    <BsPerson size={20} />
                </li>
            </ul>
            {isOpen && <div className='bg-white/90 absolute inset-x-0 top-0 pt-5 pl-10 md:hidden flex flex-col z-20'>
                <div className='flex gap-4 flex-col pb-10'>
                    <div className='flex justify-between items-center'>
                        <p className='font-bold text-4xl'>
                            BEACHES.
                        </p>
                        <AiOutlineClose onClick={handleNav} className='text-lg font-bold mr-10 cursor-pointer' />
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>Destinations</li>
                        <li>Travel</li>
                        <li>View</li>
                        <li>Book</li>
                    </ul>
                    <button>Search</button>
                    <button>Account</button>
                    <div className='flex justify-between w-full my-4'>
                        <FaFacebook className='icon' />
                        <FaTwitter className='icon' />
                        <FaYoutube className='icon' />
                        <FaPinterest className='icon' />
                        <FaInstagram className='icon' />
                    </div>
                </div>
            </div>}
            <div onClick={handleNav} className='md:hidden z-10 cursor-pointer'>
                <HiOutlineMenuAlt4 size={20} className="text-white text-xl" />
            </div>
        </div>
    </div>;
};

export default Navbar;
