import { unstable_setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { rubik } from '@/app/fonts'
import CustomLabel from '@/components/custom-label'
import { Icons } from '@/components/icons/icons'
import HeroSection from '@/components/hero-section'
import { MotionDiv, MotionH2, MotionP } from '@/components/motion-div'

export default function Page({ params: { locale } }: { params: { locale: any } }) {

    unstable_setRequestLocale(locale);
    const t = useTranslations('aboutPage');

    const sectionThree = [
        {
            head: `${t('missionheading')}`,
            text: `${t('missiontext')}`,
        },
        {
            head: `${t('visionheading')}`,
            text: `${t('visiontext')}`,
        },
        {
            head: `${t('certifiedheading')}`,
            text: `${t('certifiedtext')}`,
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
            transition: {
                delay: 0.3,
                duration: 0.4,
            }
        },
        hiddenRight: {
            x: 200,
            opacity: 0,
        },
        visibleRight: {
            x: 0,
            opacity: 1,
        },
    }
    
    return (
        <main className='flex flex-col gap-10'>
            {/*  Hero Section  */}
            <HeroSection heading={`${t('heading')}`} img={"about-page-img.jpeg"} subHeading={`${t('subheading')}`} />

            {/*  About Section  */}
            <section className='lg:mt-10 px-5'>
                <div className='max-w-7xl mx-auto grid lg:grid-cols-11 gap-10 xl:px-10 overflow-hidden h-full'>
                    <div className='flex flex-col gap-6 sm:col-span-5 text-text-color leading-relaxed text-sm lg:text-base'>
                        <CustomLabel label={`${t('aboutlabel')}`} />
                        <MotionH2 variants={aboutVariants} initial="hiddenBottom" whileInView={"visibleBottom"} viewport={{ once: true }} className={cn('text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-secondary-main leading-tight', rubik.className)}>{t('aboutheading')}</MotionH2>
                        <MotionP variants={aboutVariants} initial="hiddenBottom" whileInView={"visibleBottom"} viewport={{ once: true }}>{t('abouttext1')}</MotionP>
                        <MotionP variants={aboutVariants} initial="hiddenBottom" whileInView={"visibleBottom"} viewport={{ once: true }}>{t('abouttext2')}</MotionP>
                    </div>
                    <MotionDiv variants={aboutVariants} initial="hiddenRight" whileInView={"visibleRight"} viewport={{ once: true }} transition={{ duration: 0.4, delay: 1 }} className='sm:col-span-6 sm:pr-32 lg:pr-0 h-full w-full flex justify-center items-center'>
                        <div className='relative h-[460px] w-full my-auto'>
                            <Image src='/assets/images/home-about-bg.png' alt='bg-svg' fill className='object-contain object-right xl:scale-[1.02]' />
                            <div className='relative h-60 md:h-[350px] md:scale-[.65] lg:scale-100 lg:w-5/6 xl:w-11/12 lg:mt-16 xl:mt-0 xl:top-9'>
                                <Image src='/assets/images/home-about-img.jpg' alt='bg-svg' fill className='object-cover object-left' />
                            </div>
                        </div>
                    </MotionDiv>
                </div>
            </section>

            {/*  */}
            <section className='px-5 py-10 sm:py-20'>
                <div className='grid sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 max-w-7xl w-full mx-auto'>
                    {sectionThree.map((data, index) => (
                        <div key={index} className='lg:px-4 flex flex-col gap-4 items-center'>
                            <div className='rounded-full border-2 border-[#D8D8D8] h-fit w-fit'>
                                <div className='rounded-full h-20 w-20 sm:h-28 sm:w-28 lg:h-40 lg:w-40 bg-primary-main p-3 sm:p-6 lg:p-10 m-3 sm:m-4'>
                                    <Icons.person className='h-full w-full' />
                                </div>
                            </div>
                            <div className='flex flex-col items-center gap-2'>
                                <h2 className={cn("sm:text-2xl lg:text-3xl font-medium leading-normal")}>{data.head}</h2>
                                <span className='h-0.5 w-10 bg-primary-main' />
                            </div>
                            <p className='text-text-color leading-relaxed text-justify text-xs lg:text-sm font-medium'>{data.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
