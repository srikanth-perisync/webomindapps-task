import Link from 'next/link'
import React from 'react'

const ScheduleDemoButton = () => {
    return (
        <Link
            href='#'
            className='group py-[10px] flex items-center gap-3 px-6 rounded-[36px] bg-primary font-lato font-bold text-white transition-all duration-500 hover:bg-white border-2 border-transparent hover:text-primary hover:border-2 hover:border-primary'
        >
            Schedule Demo
            <svg width="12" height="15" viewBox="0 0 7 12" fill='none' xmlns="http://www.w3.org/2000/svg">
                <path d="M6.06226 5.39973C5.66997 5.39973 5.35197 5.71773 5.35197 6.11002C5.35197 6.5023 5.66997 6.8203 6.06226 6.8203L6.06226 5.39973ZM6.56461 6.61227C6.84199 6.33488 6.84199 5.88515 6.56461 5.60777L2.04436 1.08752C1.76697 0.810135 1.31724 0.810135 1.03986 1.08752C0.762475 1.3649 0.762475 1.81463 1.03986 2.09202L5.05786 6.11002L1.03986 10.128C0.762475 10.4054 0.762475 10.8551 1.03986 11.1325C1.31724 11.4099 1.76697 11.4099 2.04436 11.1325L6.56461 6.61227ZM6.06226 6.8203L6.06236 6.8203L6.06236 5.39973L6.06226 5.39973L6.06226 6.8203Z" fill="white" className='group-hover:fill-primary transition-all duration-500' />
            </svg>
        </Link>
    )
}

export default ScheduleDemoButton