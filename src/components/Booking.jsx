import React from "react";
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Booking = () => {
    return <div className='flex items-center justify-center lg:max-w-6xl w-full px-5 lg:px-0 mx-auto py-16'>
        <div className="grid lg:grid-cols-7 grid-cols-1 gap-8">
            <div className='lg:col-span-5'>
                <h1 className='text-3xl'>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h1>
                <p className='text-justify'>
                    Come experience the very pinnacle of luxury Caribbean all-inclusive vacations for couples at BEACHES Resorts. Our luxury beach resorts, set along the most gorgeous tropical settings and exquisite beaches in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and Curaçao, feature unlimited gourmet dining, unique bars serving premium liquors and wines, and every land and water sport, including complimentary green fees at our golf resorts and certified scuba diving at most resorts. If you are planning a wedding, BEACHES is the leader in Caribbean destination weddings and honeymoon packages.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 sm:gap-0 gap-10">
                    <div className='flex gap-3'>
                        <button>
                            <RiCustomerService2Fill size={50} />
                        </button>
                        <div>
                            <h2 className='text-xl'>LEADING SERVICE</h2>
                            <p className='text-sm'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <button>
                            <MdOutlineTravelExplore size={50} />
                        </button>
                        <div>
                            <h2 className='text-xl'>LEADING SERVICE</h2>
                            <p className='text-sm'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:col-span-2 flex flex-col gap-2'>
                <div>
                    <div className="border border-black/25 border-b-0 text-center py-3 text-lg">
                        <p>GET AN ADDITIONAL 10% OFF</p>
                        <p>12 HOURS LEFT</p>
                    </div>
                    <div className='bg-gray-900 text-white py-3 text-center'>
                        BOOK NOW AND SAVE
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-2'>
                        <p>Destination</p>
                        <select className='border rounded-md p-2 w-full'>
                            <option>Grande Antigua</option>
                            <option>Key West</option>
                            <option>Maldives</option>
                            <option>Cozumel</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p>Check In</p>
                        <input type="date" className='border py-2 px-4 border-gray-400 rounded bg-gray-200' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p>Chek Out</p>
                        <input type="date" className='border py-2 px-4 border-gray-400 rounded bg-gray-200' />
                    </div>
                    <button>
                        Rate & Availability
                    </button>
                </div>
            </div>
        </div>
    </div>;
};

export default Booking;
