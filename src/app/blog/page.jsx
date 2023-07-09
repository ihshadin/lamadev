import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { notFound } from 'next/navigation'

export const metadata = {
    title: 'Blogs | Lamamia',
    description: 'This is description',
}

async function getData() {
    const res = await fetch('http://localhost:3000/api/posts', {
        cache: "no-store"
    })
    if (!res.ok) {
        return notFound()
    }
    return res.json()
}

const Blog = async () => {

    const data = await getData();

    return (
        <div className=''>
            {
                data.map(item => (
                    <Link key={item._id} href={`/blog/${item._id}`} className='flex items-center gap-[50px] mb-[50px]'>
                        <div>
                            <Image
                                src={item.img}
                                alt=""
                                width={400}
                                height={250}
                                className='object-cover'
                            />
                        </div>
                        <div>
                            <h1 className='mb-[10px] font-bold text-3xl'>{item.title}</h1>
                            <p className='text-lg text-[#999]'>{item.desc}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default Blog;