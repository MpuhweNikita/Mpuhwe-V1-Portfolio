"use client";

import { motion } from "framer-motion";

export function CallToAction() {
    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative overflow-hidden bg-transparent py-24 lg:py-32 flex flex-col items-center justify-center border-t border-gray-200">

            {/* Decorative gradient blob */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/10 blur-3xl opacity-50" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 text-center px-4"
            >
                <h2 className="font-display text-5xl font-bold text-black md:text-7xl tracking-tight">Got a project?</h2>
                <p className="mt-6 text-xl text-gray-800 font-medium">Discover how we could work together :)</p>
            </motion.div>

            <motion.button
                type="button"
                onClick={scrollToContact}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: 0.1, type: "spring", damping: 20, stiffness: 300 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 mt-12 flex h-36 w-36 sm:h-40 sm:w-40 items-center justify-center rounded-full bg-black shadow-2xl transition-colors hover:bg-black/90"
            >
                <span className="font-bold tracking-wide text-background text-base">Get in touch</span>

                {/* Subtle glow / border ring for the dark button */}
                <span className="absolute inset-[-4px] -z-10 rounded-full border border-gray-300/20" />
            </motion.button>
        </section>
    );
}
