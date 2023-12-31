import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='py-5 flex items-center justify-between'>
            <p>@2023 Lamamia. All rights reserved.</p>
            <div className='flex gap-3 items-center'>
                <Image src='/facebook.png' width={15} height={15} alt='Lama Dev' />
                <Image src='/instagram.png' width={15} height={15} alt='Lama Dev' />
                <Image src='/twitter.png' width={15} height={15} alt='Lama Dev' />
                <Image src='/youtube.png' width={15} height={15} alt='Lama Dev' />
            </div>
        </div>
    );
};

export default Footer;