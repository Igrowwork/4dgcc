"use client"

import { useRouter } from 'next/navigation'
import React, { useState, useTransition } from 'react'

export default function LangSwitcher() {
    const [lang, setlang] = useState("en")
    const [isPending, startTransition] = useTransition()
    const router = useRouter()

    const handleClick1 = () => {
        setlang("en")
        startTransition(() => {
            router.replace(`/${lang}`)
        })
    }

    const handleClick2 = () => {
        setlang("ar")
        startTransition(() => {
            router.replace(`/${lang}`)
        })
    }

    return (
        <div className='flex gap-1 justify-end text-xs font-medium text-secondary-main'>
            <button onClick={handleClick1} disabled={isPending}>English</button>
            /
            <button onClick={handleClick2} disabled={isPending}>Arabic</button>
        </div>
    )
}
