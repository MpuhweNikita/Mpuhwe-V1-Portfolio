"use client";

import { motion } from "framer-motion";

export function CircularText({
    text = "THINK LESS • CREATE MORE • THINK LESS • CREATE MORE • ",
    className = ""
}: {
    text?: string,
    className?: string
}) {
    return (
        <motion.div
            className={`relative flex items-center justify-center pointer-events-none ${className}`}
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
            <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
                <path
                    id="circlePath"
                    d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                    fill="none"
                />
                <text className="text-[12px] font-bold tracking-[0.16em] fill-muted uppercase">
                    <textPath href="#circlePath" startOffset="0%">{text}</textPath>
                </text>
            </svg>
        </motion.div>
    );
}
