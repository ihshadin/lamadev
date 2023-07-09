import Link from 'next/link';
import React from 'react';

const Button = ({ text, url }) => {
    return (
        <Link href={url}>
            <button className='block p-5 cursor-pointer bg-[#53c28b] border-none rounded w-max text-white'>
                {text}
            </button>
        </Link>
    );
};

export default Button;