import React from "react";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
    return <div className='bg-gray-200'>
        <div className='flex flex-col justify-center lg:max-w-6xl w-full px-5 lg:px-0 mx-auto pt-20 pb-10'>
            <div className='flex justify-between w-full'>
                <p className='font-bold text-4xl'>
                    BEACHES.
                </p>
                <div className='flex gap-12'>
                    <FaFacebook className='icon' />
                    <FaTwitter className='icon' />
                    <FaYoutube className='icon' />
                    <FaPinterest className='icon' />
                    <FaInstagram className='icon' />
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <ul className='lg:flex justify-start text-left'>
                    <li>About</li>
                    <li>Partnerships</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>Advertising</li>
                </ul>
                <ul className='lg:flex text-right'>
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Travel</li>
                    <li>View</li>
                    <li>Book</li>
                </ul>
            </div>
        </div>
    </div>;
};

export default Footer;
