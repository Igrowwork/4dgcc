"use client"

import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { rubik } from '@/app/fonts'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavbarClient({ language }: { language: string }) {

    const t = useTranslations('nav');

    const path = usePathname()

    const routes = [
        {
            label: `${t('home')}`,
            href: `/${language}`,
            active: path === `/${language}` || path === '/',
        },
        {
            label: `${t('about')}`,
            href: `/${language}/about-us`,
            active: path === `/${language}/about-us`,
        },
        {
            label: `${t('services')}`,
            href: `/${language}/services`,
            active: path === `/${language}/services`,
        },
        {
            label: `${t('projects')}`,
            href: `/${language}/projects`,
            active: path === `/${language}/projects`,
        },
        {
            label: `${t('contact')}`,
            href: `/${language}/contact`,
            active: path === `/${language}/contact`,
        },
    ]

    return (
        <ul className='flex sm:justify-evenly xl:justify-around w-full'>
            {routes.map((route) => (
                <li key={route.href}>
                    <Link href={route.href} className={cn("text-base lg:text-lg pb-1 border-b-2 border-white text-secondary-main font-medium hover:text-primary-main hover:border-primary-main transition-all duration-300 ease-in-out", route.active ? 'text-primary-main border-primary-main' : '', rubik.className)}>
                        {route.label}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
