/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { MotionNav } from './motion-div'
import NavbarClient from './navbar-client'
import NavbarClientMobile from './navbar-client-mobile'
import LangSwitcher from './lang-switcher'

interface NavbarProps {
    language: string
}


export default function Navbar({ language }: NavbarProps) {

    const variants = {
        start: { y: 100, opacity: 0 },
        end: { y: 0, opacity: 1 },
    }

    return (
        <header className='px-6 py-2 sm:py-4 lg:py-2 bg-white h-20 w-full absolute top-0 left-0 z-50'>
            <MotionNav variants={variants} initial={variants.start} animate={variants.end} transition={{ duration: 0.4 }} className='max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-10 h-full'>
                <div className='col-span-2 xl:col-span-3 grid grid-cols-3'>
                    <Link href={`/`} className='relative h-full w-full'>
                        <img src={"/assets/images/logo.png"} alt='logo' className='absolute top-0 left-0 h-full w-full object-contain object-left md:scale-110' />
                    </Link>
                    <div className='h-full w-full relative col-span-2'>
                        <img src={"/assets/images/certificates.jpg"} alt='' className='absolute h-full w-full' />
                    </div>
                </div>
                <div className='sm:col-span-2 hidden sm:flex'></div>
                <div className='sm:col-span-6 xl:col-span-4 hidden sm:flex justify-center items-center h-full w-full'>
                    <NavbarClient language={language} />
                </div>
                <div className='sm:col-span-2 xl:col-span-1 flex justify-end items-center'>
                    <div className='absolute bottom-1 right-2 xl:relative xl:top-0 xl:right-0'>
                        <LangSwitcher />
                    </div>
                    <NavbarClientMobile language={language} />
                </div>
            </MotionNav>
        </header>
    )
}
