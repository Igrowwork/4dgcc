"use client"

import { usePathname } from 'next/navigation'
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify } from 'lucide-react'
import Link from 'next/link'
import { rubik } from '@/app/fonts'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'


export default function NavbarClientMobile({ language }: { language: string }) {

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
        <div className='sm:hidden h-fit w-fit'>
            <Sheet>
                <SheetTrigger>
                    <AlignJustify />
                </SheetTrigger>
                <SheetContent side={"left"} className='bg-white'>
                    <div>
                        <ul className='flex flex-col gap-6 pl-8 pt-10'>
                            {routes.map((route) => (
                                <li key={route.href}>
                                    <SheetClose asChild>
                                        <Link href={route.href} className={cn("text-lg text-secondary-main", route.active ? "text-primary-main" : "", rubik.className)}>
                                            {route.label}
                                        </Link>
                                    </SheetClose>
                                </li>
                            ))}
                        </ul>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}
