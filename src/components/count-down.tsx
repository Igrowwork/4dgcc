"use client"

import React, { useState, useEffect, useRef } from 'react';

interface Props {
    initialCount: number,
    timeDuration: number,
    symbol: string
}

const Countdown = ({ initialCount, timeDuration, symbol }: Props) => {
    const [isCounting, setIsCounting] = useState(false);
    const [IsMounted, setIsMounted] = useState(false);
    const [count, setCount] = useState(0);
    const countdownRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !isCounting) {
                setTimeout(() => {
                    setIsCounting(true);
                }, 500);
            }
        }, options);

        if (countdownRef.current) {
            observer.observe(countdownRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [isCounting]);

    useEffect(() => {
        let timer: string | number | NodeJS.Timeout | undefined;
        if (count < initialCount) {
            timer = setInterval(() => {
                setCount((prevCount) => prevCount + 100);
            }, timeDuration);
        }

        return () => {
            clearInterval(timer);
        };
    }, [isCounting, count, initialCount, timeDuration]);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!IsMounted) {
        return null;
    }

    return (
        <div
            ref={countdownRef}
            className=""
        >
            {count}{symbol}
        </div>
    );
};

export default Countdown;