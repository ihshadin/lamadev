import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: 'Portfolios | Lamamia',
    description: 'This is description',
}

const Portfoio = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold my-5'>Choose a gallery</h2>
            <div className='flex gap-12'>
                <Link className='group border-4 border-[#bbb] rounded-[5px] w-[300px] h-[400px] relative bg-cover bg-[url("/illustration.png")]' href='/portfolio/illustrations'>
                    <span className='group-hover:text-[#53c28b] absolute right-2 bottom-2 text-[40px] font-bold'>Illustrations</span>
                </Link>
                <Link className='group border-4 border-[#bbb] rounded-[5px] w-[300px] h-[400px] relative bg-cover bg-[url("/websites.jpg")]' href='/portfolio/websites'>
                    <span className='group-hover:text-[#53c28b] absolute right-2 bottom-2 text-[40px] font-bold'>Websites</span>
                </Link>
                <Link className='group border-4 border-[#bbb] rounded-[5px] w-[300px] h-[400px] relative bg-cover bg-[url("/apps.jpg")]' href='/portfolio/applications'>
                    <span className='group-hover:text-[#53c28b] absolute right-2 bottom-2 text-[40px] font-bold'>Applications</span>
                </Link>
            </div>
        </div>
    );
};

export default Portfoio;