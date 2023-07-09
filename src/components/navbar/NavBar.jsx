"use client";

import Link from 'next/link';
import React from 'react';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
];

const NavBar = () => {
    return (
        <nav className='flex justify-between items-center py-4'>
            <Link className='text-2xl font-bold' href='/'>Lamamia</Link>
            <div className='flex items-center gap-5'>
                <DarkModeToggle />
                {
                    links.map((link) => (
                        <Link key={link.id} href={link.url}>{link.title}</Link>
                    ))
                }
                <button
                    className='btn-sm bg-[#53c28b] py-1 px-3 rounded text-white'
                    onClick={() => console.log('Logged out')}
                >Logout</button>
            </div>
        </nav>
    );
};

export default NavBar;