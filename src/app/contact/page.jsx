import Button from '@/components/Button/Button';
import Image from 'next/image';
import React from 'react';

export const metadata = {
    title: 'Contact | Lamamia',
    description: 'This is description',
}

const Contact = () => {
    return (
        <div className=''>
            <h2 className='text-5xl font-bold text-center mb-10'>Let&apos;s Keep in Touch</h2>
            <div className='flex items-center gap-24'>
                <div className='flex-1 h-[500px] relative'>
                    <Image
                        src='/contact.png'
                        fill={true}
                        alt='Contact Image'
                        className='object-contain animate-move'
                    />
                </div>
                <form className='flex-1 flex flex-col gap-5'>
                    <input type="text" placeholder='Name' className='p-5 bg-transparent outline-none text-[#bbb] border-[3px] border-[#bbb] text-xl font-light' />
                    <input type="text" placeholder='Email' className='p-5 bg-transparent outline-none text-[#bbb] border-[3px] border-[#bbb] text-xl font-light' />
                    <textarea className='p-5 bg-transparent outline-none text-[#bbb] border-[3px] border-[#bbb] text-xl font-light' placeholder='Message' cols="30" rows="6"></textarea>
                    <Button url='#' text='Send' />
                </form>
            </div>
        </div>
    );
};

export default Contact;