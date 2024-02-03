import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { Icons } from './icons/icons'
import Image from 'next/image'
import { rubik } from '@/app/fonts'
import { PhoneCall } from 'lucide-react'
import { unstable_setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'

export default async function Footer({ language }: { language: string }) {

    const t = useTranslations('footer');
    unstable_setRequestLocale(language);

    const routes = [
        {
            label: `${t('home')}`,
            href: `/${language}`,
        },
        {
            label: `${t('about')}`,
            href: `/${language}/about-us`,
        },
        {
            label: `${t('services')}`,
            href: `/${language}/services`,
        },
        {
            label: `${t('projects')}`,
            href: `/${language}/projects`,
        },
        {
            label: `${t('contact')}`,
            href: `/${language}/contact`,
        },
    ]
    return (
        <footer className='px-5 sm:px-10 lg:px-16 xl:px-0 bg-secondary-main relative h-fit w-full overflow-x-hidden'>
            <div className='w-full max-w-7xl mx-auto relative z-10'>
                <div className='text-white pt-20 pb-6 flex flex-col gap-10 relative z-10'>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-10'>
                        <div className='lg:col-span-9'>
                            <h2 className={cn('text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-semibold')}>{`"${t('title')}"`}</h2>
                        </div>
                        <div className='lg:col-span-3 flex flex-col gap-3 sm:gap-6'>
                            <Link href={"/"} target='_blank' className='flex gap-4'>
                                <Icons.map2 className='shrink-0 bg-white p-1.5 rounded-full h-8 w-8' />
                                <span>{t('address')}</span>
                            </Link>
                            <Link href={"mailto:Info@4dgcc.com"} className='flex items-center gap-4'>
                                <Icons.mail2 className='shrink-0 bg-white p-1.5 rounded-full h-8 w-8' />
                                <span>Info@4dgcc.com</span>
                            </Link>
                            <Link href={"tel:+97126679435"} className='flex items-center gap-4'>
                                <span className='shrink-0 bg-white p-2 rounded-full h-8 w-8 text-secondary-main'><PhoneCall className='h-full w-full' /></span>
                                <span>+97126679435</span>
                            </Link>
                        </div>
                    </div>
                    <div className='flex sm:grid sm:grid-cols-10 h-fit py-4 border-b-2 -mt-8 pl-1 sm:mt-0 sm:pl-0'>
                        <Link href={"/"} className='hidden sm:block relative sm:col-span-1 xl:col-span-2 h-full w-full'>
                            <Image src={"/assets/images/white-logo.png"} alt='logo' fill className='object-contain scale-125' />
                        </Link>
                        <div className='sm:col-span-7 lg:col-span-4 xl:col-span-5 hidden sm:flex justify-center items-center h-full w-full py-4'>
                            <ul className='flex sm:justify-evenly xl:justify-around w-full'>
                                {routes.map((route) => (
                                    <li key={route.href}>
                                        <Link href={route.href} className={cn("text-base lg:text-lg pb-1 lg:hover:border-b-2 xl:border-b-2 xl:border-secondary-main text-white hover:border-white transition-all duration-300 ease-in-out", rubik.className)}>
                                            {route.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='sm:col-span-2 xl:col-span-3'>
                            {/* <div className='flex gap-4 sm:gap-3 lg:gap-6 w-fit mx-auto'>
                                <Icons.fb className='h-5 w-5 sm:h-4 sm:w-4 lg:h-6 lg:w-6' />
                                <Icons.twitter className='h-5 w-5 sm:h-4 sm:w-4 lg:h-6 lg:w-6' />
                                <Icons.insta className='h-5 w-5 sm:h-4 sm:w-4 lg:h-6 lg:w-6' />
                                <Icons.linkedIn className='h-5 w-5 sm:h-4 sm:w-4 lg:h-6 lg:w-6' />
                            </div> */}
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 w-full text-gray-400 text-xs lg:text-sm'>
                        <div className=''>
                            {t('copyright')}
                        </div>
                        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8'>
                            <Link href={""}>
                                {t('t&c')}
                            </Link>
                            <Link href={""}>
                                {t('privacy')}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='absolute z-0 top-0 right-0 sm:-right-6 lg:-right-14 xl:-right-20 h-full w-fit'>
                    <Icons.footerC className='h-full w-full' />
                </div>
            </div>
        </footer>
    )
}
