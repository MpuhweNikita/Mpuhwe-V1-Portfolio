"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
    useEffect(() => {
        const timer = setTimeout(onComplete, 1600);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#f8fafc]"
        >
            <div className="pointer-events-none absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl"
            >
                Welcome visitor. Let&apos;s dive in..
            </motion.p>
        </motion.div>
    );
}
