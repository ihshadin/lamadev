import Image from 'next/image';
import React from 'react';
import { notFound } from 'next/navigation'

async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: "no-store"
    })
    if (!res.ok) {
        return notFound()
    }
    return res.json()
}

export const generateMetadata = async ({ params }) => {
    const post = await getData(params.id)
    return {
        title: post.title,
        description: post.desc,
    }
}

const SingleBlog = async ({ params }) => {

    const data = await getData(params.id)

    return (
        <div>
            <div className='flex'>
                <div className='flex-1 flex flex-col justify-between'>
                    <h1 className='text-10 text-3xl font-bold'>{data.title}</h1>
                    <p className='text-lg font-light'>
                        {data.desc}
                    </p>
                    <div className='flex items-center gap-[10px]'>
                        <Image
                            src={'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=750&dpr=2'}
                            alt="Images"
                            width={40}
                            height={40}
                            className='object-cover rounded-full w-10 h-10'
                        />
                        <span className='text-lg font-semibold'>{data.username}</span>
                    </div>
                </div>
                <div className='flex-1 h-[300px] relative'>
                    <Image
                        src={data.img}
                        alt=""
                        fill={true}
                        className='object-cover'
                    />
                </div>
            </div>
            <div className='mt-[50px] text-xl font-light text-[#999] text-justify'>
                <p className=''>
                    {data.content}
                </p>
            </div>
        </div>
    );
};

export default SingleBlog;