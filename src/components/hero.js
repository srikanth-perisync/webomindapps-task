import React from 'react'
import ScheduleDemoButton from './schedule-demo-button'
import NextImage from './image-component'

const Hero = () => {
    return (
        <main className='max-w-7xl mx-auto px-2'>
            <div className='flex py-16'>
                <div className='max-w-xl pt-16'>
                    <h1 className='font-semibold text-[44px] leading-[60px] text-secondary mb-3'>
                        Distribute and manage insurance business in <span className='text-primary '>one platform</span>
                    </h1>
                    <p className='text-sm text-secondary font-lato leading-4 mb-[30px]'>Manage your insurance business seamlessly using Webomindapps assurance platform. Increase revenue, expand product offerings.</p>
                    <ScheduleDemoButton />
                </div>
                <div className='w-full h-full'>
                    <NextImage
                        src='/assets/hero.svg'
                        className='w-[728px] h-[515px]'
                    />
                </div>
            </div>
        </main>
    )
}

export default Hero