import { rubik } from '@/app/fonts'
import { cn } from '@/lib/utils'
import React from 'react'
import { MotionH1, MotionH2, MotionSection } from './motion-div'

const variants = {
    start: { x: 200, opacity: 0 },
    end: { x: 0, opacity: 1 },
    startUp: { y: 200, opacity: 0 },
    endUp: { y: 0, opacity: 1 },
}

export default function HeroSection({ heading, subHeading, img }: { heading: String, img: String, subHeading: String }) {
    return (
        <MotionSection variants={variants} initial={variants.startUp} animate={variants.endUp} transition={{ duration: 0.5, delay: 0.3 }} className='h-[550px] xl:h-screen w-full relative'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/assets/images/${img}`} alt='hero image' className='absolute h-full w-full object-cover' />
            <div className='h-full w-full absolute top-0 left-0 bg-black/40' />
            <div className='absolute h-fit w-fit flex flex-col gap-4 top-1/3 left-10 lg:left-20 xl:left-36'>
                <MotionH1 variants={variants} initial={variants.startUp} animate={variants.endUp} transition={{ duration: 0.4, delay: 0.9 }} className={cn('text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-bold', rubik.className)}>{heading}</MotionH1>
                <MotionH2 variants={variants} initial={variants.startUp} animate={variants.endUp} transition={{ duration: 0.4, delay: 1.1 }} className='text-white w-11/12 lg:w-2/3 xl:w-1/2 text-xs sm:text-sm lg:text-base'>{subHeading}</MotionH2>
            </div>
        </MotionSection>
    )
}
