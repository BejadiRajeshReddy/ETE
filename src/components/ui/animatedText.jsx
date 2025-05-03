import React from 'react'
import { twMerge } from 'tailwind-merge'

function AnimatedText({ duration = 0.05, text = "", className = "" }) {
    return (
        <h1 className={twMerge(`overflow-hidden`, className)}>
            {text.match(/./gu).map((char, index) => (
                <span
                    className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
                    key={`${char}-${index}`}
                    style={{ animationDelay: `${index * duration}s` }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </h1>
    )
}

export default AnimatedText