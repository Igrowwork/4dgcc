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


export default function NavbarClientMobile() {

    const path = usePathname()

    const routes = [
        {
            label: 'Home',
            href: '/',
            active: path === '/en' || path === '/ar'
        },
        {
            label: 'About Us',
            href: '/about-us',
            active: path === '/about-us'
        },
        {
            label: 'Services',
            href: '/services',
            active: path === '/services'
        },
        {
            label: 'Projects',
            href: '/projects',
            active: path === '/projects'
        },
        {
            label: 'Contact',
            href: '/contact',
            active: path === '/contact'
        },
    ]

    return (
        <div className='sm:hidden h-fit w-fit'>
            <Sheet>
                <SheetTrigger>
                    <AlignJustify />
                </SheetTrigger>
                <SheetContent side={"left"}>
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
