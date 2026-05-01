"use client";

const text = "BUILDING INTERFACES THAT MATTER · FRONTEND & MOBILE ENGINEER · CLEAN CODE · THOUGHTFUL UX · KIGALI, RWANDA · REACT · NEXT.JS · REACT NATIVE · ";

export function Marquee() {
    return (
        <section className="relative flex w-full overflow-hidden bg-white py-6 border-y border-gray-300/10">
            <div className="flex w-max animate-marquee-scroll whitespace-nowrap hover:[animation-play-state:paused]">
                {/* Duplicate the string multiple times to ensure the loop doesn't jump on wide screens */}
                {[1, 2, 3, 4].map((i) => (
                    <span
                        key={i}
                        className="px-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wide text-black"
                    >
                        {text}
                    </span>
                ))}
            </div>
        </section>
    );
}
