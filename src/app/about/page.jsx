import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import aboutImg from 'public/hero.png'

export const metadata = {
    title: 'About Us | Lamamia',
    description: 'This is description',
}

const About = () => {
    return (
        <>
            <div>
                <div className='w-full h-[300px] relative'>
                    <Image
                        src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        fill={true}
                        alt="images"
                        className='object-cover grayscale'
                    />
                    <div className='absolute bottom-5 left-5 bg-[#53c28b] p-2 text-white'>
                        <h2 className='text-3xl font-bold'>Digital Storetellers</h2>
                        <h2 className='text-2xl font-semibold'>Handcrafting award winning digital experiences</h2>
                    </div>
                </div>
                <div className='flex gap-24'>
                    <div className='flex-1 mt-12 flex flex-col gap-7'>
                        <h2 className='text-4xl font-bold'>Who Are We?</h2>
                        <p className='text-lg font-light'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
                            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
                            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
                            <br />
                            <br />
                            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
                            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
                            officiis voluptatum quo ea eveniet?
                        </p>
                    </div>
                    <div className='flex-1 mt-12 flex flex-col gap-7'>
                        <h2 className='text-4xl font-bold'>What We Do?</h2>
                        <p className='text-lg font-light'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
                            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
                            Creative Illustrations
                            <br />
                            <br /> - Dynamic Websites
                            <br />
                            <br /> - Fast and Handy
                            <br />
                            <br /> - Mobile Apps
                        </p>
                        <Button url='/contact' text='Contact' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;