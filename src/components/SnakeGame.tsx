"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { snakePath } from "./SnakePath"; // Path we just generated

export function SnakeGame({ onComplete }: { onComplete: () => void }) {
    const [shouldFadeOut, setShouldFadeOut] = useState(false);

    useEffect(() => {
        // 5 seconds for the writing animation + 1 second pause
        const timer = setTimeout(() => {
            setShouldFadeOut(true);
        }, 6000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: shouldFadeOut ? 0 : 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onAnimationComplete={(definition) => {
                if (definition === "animate" && shouldFadeOut) {
                    onComplete();
                }
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
            <div className="relative flex w-full max-w-[1200px] items-center justify-center -translate-y-8 px-4">

                {/* SVG Container for the drawn text path and trailing dots */}
                <svg
                    viewBox="0 0 1500 200"
                    className="w-full h-auto drop-shadow-sm overflow-visible"
                    preserveAspectRatio="xMidYMid meet"
                >
                    {/* Background muted path (optional, let's keep it transparent for true draw) */}

                    {/* Main Ink Path: The text being written */}
                    <motion.path
                        d={snakePath}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 5, ease: "linear" }}
                        stroke="#111111"
                        strokeWidth="4"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        fill="transparent"
                    />

                    {/* Snake Body Segments (SVG trailing dots) */}
                    {[...Array(10)].map((_, i) => (
                        <motion.path
                            key={i}
                            d={snakePath}
                            initial={{ pathLength: 0.001, pathOffset: 0, opacity: 0 }}
                            animate={{
                                pathOffset: 1,
                                opacity: [0, 1, 1, 0] // Fade in, hold, fade out at end
                            }}
                            transition={{
                                pathOffset: { duration: 5, ease: "linear", delay: i * 0.08 },
                                opacity: { duration: 5, times: [0, 0.05, 0.95, 1], delay: i * 0.08 }
                            }}
                            stroke="#111111"
                            strokeWidth={Math.max(6, 12 - i)} // Gradually gets thinner
                            strokeLinecap="round"
                            fill="transparent"
                            style={{ pathSpacing: 1 }}
                            className="drop-shadow-md"
                        />
                    ))}
                </svg>

                {/* 
          Note: In this implementation we omitted the "CSS offset-path div" approach and went purely with Framer SVG path animations.
          Framer Motion SVG animation correctly interpolates the full length and prevents mismatch across devices/viewBoxes.
          This ensures scaling the page will flawlessly scale the snake body along the exact letters. 
        */}

            </div>

            {/* Skip Button */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1 }}
                onClick={() => setShouldFadeOut(true)}
                className="absolute bottom-10 right-10 text-sm font-medium text-[#7a7a70] transition-opacity hover:opacity-100"
            >
                Skip &rarr;
            </motion.button>
        </motion.div>
    );
}
