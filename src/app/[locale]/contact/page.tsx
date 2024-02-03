import { cn } from '@/lib/utils'
import React from 'react'
import { rubik } from '@/app/fonts'
import { Mail, MapPin, PhoneCall } from 'lucide-react'
import HeroSection from '@/components/hero-section'
import { Icons } from '@/components/icons/icons'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'


export default function Page({ params: { locale } }: { params: { locale: any } }) {

    const t = useTranslations('contactPage');
    unstable_setRequestLocale(locale);

    return (
        <main className='flex flex-col gap-10 sm:gap-20'>

            {/*  Hero Section  */}
            <HeroSection heading={`${t('heading')}`} img={"contact-page-img.jpg"} subHeading={`${t('subheading')}`} />

            <section className='px-5 sm:px-10 mb-20'>
                <div className='h-full w-full max-w-7xl mx-auto lg:px-10 flex flex-col gap-20'>
                    {/* <ContactForm /> */}
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-0'>
                        <div className='flex flex-col gap-8'>
                            <div className='flex gap-4 items-start'>
                                <span className='h-6 sm:h-8 lg:h-9 lg:w-9 w-6 sm:w-8 p-1 sm:p-2 rounded-full border lg:border-2 border-primary text-primary shrink-0'><PhoneCall className='h-full w-full' /></span>
                                <div className='flex flex-col gap-2'>
                                    <p className={cn('sm:text-lg lg:text-xl text-primary', rubik.className)}>{t('contact')}</p>
                                    <div className='flex gap-4'>
                                        <a href="tel:+97126679435" className='flex items-center gap-2 hover:scale-105 transition-all duration-200 w-fit text-sm lg:text-base font-medium'>{`+971 2 6679435`}</a>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-4 items-start'>
                                <span className='h-6 sm:h-8 lg:h-9 lg:w-9 w-6 sm:w-8 p-1 sm:p-2 rounded-full border lg:border-2 border-primary text-primary shrink-0'><Icons.fax className='h-full w-full' /></span>
                                <div className='flex flex-col gap-2'>
                                    <p className={cn('sm:text-lg lg:text-xl text-primary', rubik.className)}>{t('fax')}</p>
                                    <div className='flex gap-4'>
                                        <a href="tel:+97126330819" className='flex items-center gap-2 hover:scale-105 transition-all duration-200 w-fit text-sm lg:text-base font-medium'>{`+971 2 6330819`}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 items-start'>
                            <span className='h-6 sm:h-8 lg:h-9 lg:w-9 w-6 sm:w-8 p-1 sm:p-2 rounded-full border lg:border-2 border-primary text-primary shrink-0'><Mail className='h-full w-full' /></span>
                            <div className='flex flex-col gap-2'>
                                <p className={cn('sm:text-lg lg:text-xl text-primary', rubik.className)}>{t('email')}</p>
                                <a href="mailto:Info@4dgcc.com" className='flex items-center gap-2 hover:scale-105 transition-all duration-200 w-fit text-sm lg:text-base font-medium'>{`Info@4dgcc.com`}</a>
                                <a href="mailto:HR@4dgcc.com" className='flex items-center gap-2 hover:scale-105 transition-all duration-200 w-fit text-sm lg:text-base font-medium'>{`HR@4dgcc.com`}</a>
                                <a href="mailto:fourthdgchr@aol.com" className='flex items-center gap-2 hover:scale-105 transition-all duration-200 w-fit text-sm lg:text-base font-medium'>{`fourthdgchr@aol.com`}</a>
                            </div>
                        </div>
                        <div className='flex gap-4 lg:items-start'>
                            <span className='h-6 sm:h-8 lg:h-9 lg:w-9 w-6 sm:w-8 p-1 sm:p-2 rounded-full border lg:border-2 border-primary text-primary shrink-0'><MapPin className='h-full w-full' /></span>
                            <div className='flex flex-col gap-2'>
                                <p className={cn('sm:text-lg lg:text-xl text-primary', rubik.className)}>{t('location')}</p>
                                <span className='w-[70%] sm:w-[75%] lg:w-[85%] xl:w-3/4 text-sm lg:text-base font-medium'>{t('address')}</span>
                                <span className='w-[70%] sm:w-[75%] lg:w-[85%] xl:w-3/4 text-sm lg:text-base font-medium'>P.O. Box: 113983</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}
