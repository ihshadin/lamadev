import Button from '@/components/Button/Button';
import Image from 'next/image';
import React from 'react';
import { items } from './data'
import { notFound } from 'next/navigation';

const getData = (cat) => {
    const data = items[cat];

    if (data) {
        return data
    }

    return notFound();
}

const PortfolioCategory = ({ params }) => {

    const data = getData(params.category);

    return (
        <div>
            <h2 className='text-3xl font-bold text-[#53c28b] capitalize'>{params.category}</h2>
            {
                data.map((item, index) => (
                    <div
                        key={item.id}
                        className={`flex gap-[50px] mt-[50px] mb-[100px] ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    >
                        <div className='flex-1 flex flex-col gap-5 justify-center'>
                            <h1 className='text-[50px] font-bold'>{item.title}</h1>
                            <p className='text-xl'>
                                {item.desc}
                            </p>
                            <Button url='#' text='See More' />
                        </div>
                        <div className='flex-1 h-[500px] relative'>
                            <Image
                                src={item.image}
                                fill={true}
                                alt='Contact Image'
                                className='object-contain'
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default PortfolioCategory;