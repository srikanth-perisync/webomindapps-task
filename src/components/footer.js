import React from 'react'
import CustomButton from './custom-button'
import NextImage from './image-component'

const Footer = () => {
    return (
        <main className='bg-[#011740]'>
            <div className='max-w-7xl mx-auto pt-24 px-2'>
                <div className='flex flex-col items-center max-w-3xl mx-auto gap-6 mb-20'>
                    <h1 className='text-[39px] font-semibold text-center text-white leading-[52px]'>Leverage technology to streamline credit-linked insurance</h1>
                    <p className='font-lato text-center text-lg text-white leading-5'>Share a few quick details to understand how we can best help.</p>
                    <CustomButton
                        label="Lets Talk"
                        bgColor='#fff'
                        textColor="#003DB8"
                    />
                </div>

                <div className='max-w-6xl pt-8 px-14 mx-auto bg-white min-h-56 rounded-tl-[15px] rounded-tr-[15px]'>
                    <div className='flex justify-between items-center'>
                        <NextImage
                            src='/assets/logo.svg'
                            alt='logo'
                            className='w-60 h-12'
                        />
                        <div className='flex gap-9 '>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Footer