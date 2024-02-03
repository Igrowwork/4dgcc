import { rubik } from '@/app/fonts'
import { cn } from '@/lib/utils'
import React from 'react'
import { MotionDiv } from './motion-div'

const variants = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
        }
    }
}

export default function CustomLabel({ label }: { label: String }) {
    return (
        <MotionDiv variants={variants} initial={"hidden"} whileInView={"visible"} viewport={{once: true}} className={cn('px-4 py-2 font-medium capitalize leading-relaxed text-secondary-main border border-[#EEE] rounded-sm w-fit bg-slate-100', rubik.className)}>
            {label}
        </MotionDiv>
    )
}
