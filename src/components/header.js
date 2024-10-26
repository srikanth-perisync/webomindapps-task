import React from 'react'
import NextImage from './image-component'
import Link from 'next/link';
import ScheduleDemoButton from './schedule-demo-button';

const NAV_LIST = [
    { href: '/products', label: 'Products' },
    { href: '/industries', label: 'Industries' },
    { href: '/company', label: 'Company' },
    { href: '/resources', label: 'Resources' },
];

const NavLinks = () => {
    return (
        <div className='flex gap-9 items-center'>
            {NAV_LIST.map((e) => (
                <Link href={e?.href} key={e?.href} className='font-lato transition-all duration-500 hover:text-primary text-sm text-gray-900'>
                    {e?.label}
                </Link>
            ))}
        </div>
    );
};

const Header = () => {
    return (
        <main className='w-full bg-white min-h-20 shadow-md shadow-[#EE1B3033]'>
            <section className='max-w-7xl pt-6 pb-3 mx-auto px-2'>
                <div className='flex justify-between items-center'>
                    <NextImage
                        src='/assets/logo.svg'
                        alt='logo'
                        className='w-60 h-12'
                    />
                    <div className='flex gap-9 '>
                        <NavLinks />
                        <ScheduleDemoButton />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Header