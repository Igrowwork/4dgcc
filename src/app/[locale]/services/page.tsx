import { unstable_setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { rubik } from '@/app/fonts'
import HeroSection from '@/components/hero-section'
import { MotionDiv} from '@/components/motion-div'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services : Fourth Dimension General Contracting LLC Abu Dhabi, UAE",
  keywords: ['electrical construction', 'mechanical construction', 'oil and gas field facilities & services', 'water desalination and treatment', 'sewerage treatment station', 'cuilding projects contracting', 'steel structure contracting'],
  description: "Build the future with us where construction meets excellence. Your project, our passion.",
};


export default function Page({ params: { locale } }: { params: { locale: any } }) {

    unstable_setRequestLocale(locale);
    const t = useTranslations('servicePage');

    const servicesData = [
        {
            imgName: "service-img-1.jpg",
            heading: `${t('service1')}`,
            text: `${t('service1text')}`,
            delay: 0.3,
        },
        {
            imgName: "service-img-2.jpg",
            heading: `${t('service2')}`,
            text: `${t('service2text')}`,
            delay: 0.6,
        },
        {
            imgName: "service-img-3.jpg",
            heading: `${t('service3')}`,
            text: `${t('service3text')}`,
            delay: 0.3,
        },
        {
            imgName: "service-img-4.jpg",
            heading: `${t('service4')}`,
            text: `${t('service4text')}`,
            delay: 0.6,
        },
        {
            imgName: "service-img-5.jpg",
            heading: `${t('service5')}`,
            text: `${t('service5text')}`,
            delay: 0.3,
        },
        {
            imgName: "service-img-6.jpg",
            heading: `${t('service6')}`,
            text: `${t('service6text')}`,
            delay: 0.6,
        },
        {
            imgName: "service-img-7.jpg",
            heading: `${t('service7')}`,
            text: `${t('service7text')}`,
            delay: 0.3,
        },
    ]

    const aboutVariants = {
        hiddenBottom: {
            y: 100,
            opacity: 0,
        },
        visibleBottom: {
            y: 0,
            opacity: 1,
            staggerChildren: 0.3,
        },
        hiddenRight: {
            x: 400,
            opacity: 0,
        },
        visibleRight: {
            x: 0,
            opacity: 1,
        },
    }

    return (
        <main className='flex flex-col gap-20'>

            {/*  Hero Section  */}
            <HeroSection heading={`${t('heading')}`} img={"service-page-img.jpg"} subHeading={`${t('subheading')}`} />

            <section className='px-5 h-full w-full'>
                <div className='grid lg:grid-cols-2 gap-x-8 gap-y-14 h-full w-full max-w-7xl mx-auto sm:px-10 lg:px-0'>
                    {servicesData.map((data, index) => (
                        <MotionDiv variants={aboutVariants} initial="hiddenBottom" whileInView={"visibleBottom"} viewport={{ once: true }} transition={{ delay: data.delay, duration: 0.4, }} className='grid sm:grid-cols-10' key={index}>
                            <div className='relative h-[225px] sm:h-full w-full sm:col-span-4'>
                                <Image src={`/assets/images/${data.imgName}`} alt='image' fill className='object-cover' />
                            </div>
                            <div className='sm:col-span-6 flex flex-col gap-6 sm:pl-6 py-4 sm:py-2'>
                                <h3 className={cn("text-2xl text-secondary-main font-medium", rubik.className)}>{data.heading}</h3>
                                <span className='h-0.5 w-10 bg-primary-main -mt-6' />
                                <p className='text-sm font-medium text-gray-700'>{data.text}</p>
                            </div>
                        </MotionDiv>
                    ))}
                </div>
            </section>

            <section className='px-5 h-full w-full relative py-8 mb-20'>
                <Image src={"/assets/images/projects-bg-img.png"} alt='' fill className=' object-cover' />
                <div className='h-full w-full absolute top-0 left-0 bg-black/75' />
                <div className='grid sm:grid-cols-3 gap-8 sm:gap-0 xl:gap-14 h-full w-full max-w-7xl mx-auto text-white relative py-6'>
                    <div className='flex flex-col items-center'>
                        <span className={cn('text-3xl sm:text-4xl lg:text-6xl font-medium leading-snug', rubik.className)}>4500+</span>
                        <h3 className={cn('text-xl lg:text-2xl font-medium leading-normal', rubik.className)}>{t('fp')}</h3>
                        <span className='h-0.5 w-14 bg-primary-main mt-4 lg:mt-6' />
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className={cn('text-3xl sm:text-4xl lg:text-6xl font-medium leading-snug', rubik.className)}>3100+</span>
                        <h3 className={cn('text-xl lg:text-2xl font-medium leading-normal', rubik.className)}>{t('hc')}</h3>
                        <span className='h-0.5 w-14 bg-primary-main mt-4 lg:mt-6' />
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className={cn('text-3xl sm:text-4xl lg:text-6xl font-medium leading-snug', rubik.className)}>650+</span>
                        <h3 className={cn('text-xl lg:text-2xl font-medium leading-normal', rubik.className)}>{t('lp')}</h3>
                        <span className='h-0.5 w-14 bg-primary-main mt-4 lg:mt-6' />
                    </div>
                </div>
            </section>
        </main>
    )
}
